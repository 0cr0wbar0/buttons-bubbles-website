CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"username" varchar(20) NOT NULL,
	"password" varchar(60) NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
