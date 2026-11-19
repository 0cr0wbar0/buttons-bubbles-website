import { pgTable, serial, text, date, timestamp, bigint } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),

  dob: date("dob").notNull(),
  address: text("address").notNull(),


  reset_token: text("reset_token"),
  reset_token_expiry: bigint("reset_token_expiry", { mode: "number" }),

  createdAt: timestamp("created_at").defaultNow(),
});