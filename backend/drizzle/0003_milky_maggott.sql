CREATE TABLE "emails" (
	"id" serial PRIMARY KEY NOT NULL,
	"app_id" integer NOT NULL,
	"to" text NOT NULL,
	"subject" text NOT NULL,
	"body" text NOT NULL,
	"status" text DEFAULT 'pending',
	"error" text,
	"created_at" timestamp DEFAULT now()
);
