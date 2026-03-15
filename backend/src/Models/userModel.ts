import { db } from "../Database/db.js";
import { users } from "../Database/schema.js";
import { eq } from "drizzle-orm";


// Find a user by email
export const findUserByEmail = async (email: string) => {
  return db.select().from(users).where(eq(users.email, email));
};


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