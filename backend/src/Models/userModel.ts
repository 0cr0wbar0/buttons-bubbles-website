import { db } from "../Database/db.js";
import { users } from "../Database/schema.js";
import { eq ,isNotNull} from "drizzle-orm";


// Find a user by email
export const findUserByEmail = async (email: string) => {
  return db.select().from(users).where(eq(users.email, email));
};

// Find a user email by ID
export const findUserByEmailByID = async (id: number) => {
 return  db.select()
          .from(users)
          .where(eq(users.id, id));
}

// Insert a new user into the database
export const createUser = async (user: {
  name: string;
  email: string;
  password: string;
  dob: string;
  address: string;
}) => {
  return db.insert(users).values(user).returning();
};


//update password
export const updateUserPassword = async (email: string, newPassword: string) => {
  return db.update(users).set({ password: newPassword }).where(eq(users.email, email)).returning();
}

export const saveResetToken = async (
  email: string,
  hashedToken: string,
  expiry: number
) => {
  return db
    .update(users)
    .set({
      reset_token: hashedToken,
      reset_token_expiry: expiry,
    })
    .where(eq(users.email, email))
    .returning();
};



export const findUserByResetToken = async () => {
  return db
    .select()
    .from(users)
    .where(isNotNull(users.reset_token));
};

export const clearResetToken = async (email: string) => {
  return db
    .update(users)
    .set({
      reset_token: null,
      reset_token_expiry: null,
    })
    .where(eq(users.email, email))
    .returning();
};

export const findUserByHashedToken = async (hashedToken: string) => {
  return db
    .select()
    .from(users)
    .where(eq(users.reset_token, hashedToken));
};