import express from "express";
import type { Request, Response } from "express";
import { passwordHash, passwordVerify } from "../utils/password.js";
import { db } from "../db/db.js";
import { userTable } from "../db/schema.js";
import { z } from "zod";
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema
} from "drizzle-zod";
import { eq, InferInsertModel, InferSelectModel } from "drizzle-orm";

// Creating types with which to represent new records and queries for the user table
type User = InferSelectModel<typeof userTable>;
type NewUser = InferInsertModel<typeof userTable>;

// Creating validation schemas for safe database manipulation -
// public user schema hides sensitive data from frontend in responses
const userSelectSchema = createSelectSchema(userTable);
const publicUserSchema = userSelectSchema.omit({ id: true, password: true });
const userInsertSchema = createInsertSchema(userTable);
const userUpdateSchema = createUpdateSchema(userTable);
const idParamSchema = z.object({
  id: z.coerce.number().int().positive()
});
const loginSchema = z.object({
  email: z.coerce.string(),
  password: z.coerce.string()
});

// Raw database interface functions
async function createUser(data: NewUser): Promise<User> {
  const [newRecord] = await db.insert(userTable).values(data).returning();

  return newRecord;
}

async function getUser(id: number): Promise<User | null> {
  const user = await db.query.userTable.findFirst({
    where: eq(userTable.id, id)
  });

  if (user) {
    return user;
  }
  return null;
}

async function updateUser(
  id: number,
  data: Partial<Omit<User, "id">>
): Promise<User> {
  const [user] = await db
    .update(userTable)
    .set(data)
    .where(eq(userTable.id, id))
    .returning();
  return user;
}

async function deleteUser(id: number): Promise<void> {
  await db.delete(userTable).where(eq(userTable.id, id));
}

async function loginAttempt(
  email: string,
  password: string,
  res: Response
): Promise<Response> {
  const row = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, email));

  if (row.length < 1) {
    return res.status(404).json({ error: "User not found" });
  }

  if (await passwordVerify(password, row[0].password)) {
    return res.status(200).json({ message: "Success" });
  } else {
    return res.status(403).json({ error: "Wrong password, access denied" });
  }
}

// Router for handling user account HTTP requests, listens on <url>/users
const userRouter = express.Router();

// POST <url>/users/ (creates new user)
userRouter.post("/", async (req: Request, res: Response): Promise<Response> => {
  const parsed = userInsertSchema.safeParse(req.body);

  if (!parsed.success) {
    return res
      .status(400)
      .json({ message: "Invalid request body", errors: parsed.error });
  }

  try {
    const newUser: NewUser = parsed.data;

    newUser.password = await passwordHash(parsed.data.password);

    const insertAttempt = await createUser(newUser);

    return res.status(201).json(publicUserSchema.parse(insertAttempt));
  } catch (err) {
    return res.status(500).json({
      error: "Failed to create user",
      message: err
    });
  }
});

// POST <url>/users/login/ (handles login requests, expects only email and password)
userRouter.post(
  "/login/",
  async (req: Request, res: Response): Promise<Response> => {
    const parsed = loginSchema.safeParse(req.body);

    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Invalid request body", errors: parsed.error });
    }

    try {
      const attempt = await loginAttempt(
        parsed.data.email,
        parsed.data.password,
        res
      );
      return attempt;
    } catch (err) {
      return res.status(500).json({ message: "Error logging in", error: err });
    }
  }
);

// GET <url>/users/<user ID> (gets user with requested ID)
userRouter.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const parsed = idParamSchema.safeParse(req.params);

    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Invalid request params", errors: parsed.error });
    }

    try {
      const user: User | null = await getUser(parsed.data.id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(publicUserSchema.parse(user));
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Error getting user", message: err });
    }
  }
);

// PUT <url>/users/<user ID> (updates user of requested ID with requested data)
userRouter.put(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const parsedParams = idParamSchema.safeParse(req.params);
    const parsedBody = userUpdateSchema.safeParse(req.body);

    if (!parsedParams.success) {
      return res.status(400).json({
        message: "Invalid request params",
        errors: parsedParams.error
      });
    }

    if (!parsedBody.success) {
      return res
        .status(400)
        .json({ message: "Invalid request body", errors: parsedBody.error });
    }

    if (Object.keys(parsedBody.data).length === 0) {
      return res.status(400).json({
        message: "No updatable fields provided"
      });
    }

    try {
      const user: User | null = await getUser(parsedParams.data.id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (parsedBody.data.password) {
        const newPassword = await passwordHash(parsedBody.data.password);
        parsedBody.data.password = newPassword;
      }

      const updatedUser = await updateUser(
        parsedParams.data.id,
        parsedBody.data
      );

      return res.status(200).json(publicUserSchema.safeParse(updatedUser));
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error updating user", error: err });
    }
  }
);

// DELETE <url>/users/<user ID> (deletes user with requested ID)
userRouter.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const parsedParams = idParamSchema.safeParse(req.params);

    if (!parsedParams.success) {
      return res.status(400).json({
        message: "Invalid request params",
        errors: parsedParams.error
      });
    }

    const toDelete: User | null = await getUser(parsedParams.data.id);

    if (!toDelete) {
      return res.status(404).json({ error: "User not found" });
    }

    try {
      await deleteUser(parsedParams.data.id);
      return res.status(200).json({ message: "OK" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error deleting user", error: err });
    }
  }
);

// Making user router available to the main router index.ts
export default userRouter;
