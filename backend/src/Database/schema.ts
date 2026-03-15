import { pgTable, serial, text, date, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  dob: date("dob").notNull(),
  address: text("address").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
