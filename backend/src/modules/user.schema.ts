import { serial, pgTable, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: serial("id").primaryKey(),
  email: varchar({ length: 255 }).notNull().unique(),
  username: varchar({ length: 20 }).notNull(),
  password: varchar({ length: 60 }).notNull()
});
