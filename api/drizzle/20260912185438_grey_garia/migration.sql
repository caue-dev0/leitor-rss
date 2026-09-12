ALTER TABLE "feed" ADD COLUMN "userId" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "feed" ALTER COLUMN "link" SET DATA TYPE text USING "link"::text;--> statement-breakpoint
ALTER TABLE "feed" ALTER COLUMN "description" SET DATA TYPE text USING "description"::text;--> statement-breakpoint
ALTER TABLE "feed" ADD CONSTRAINT "feed_userId_users_id_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE;