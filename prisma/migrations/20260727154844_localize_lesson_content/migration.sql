-- Convert curriculum text fields to JSON so they can hold per-locale translations.
-- Existing plain-text values are wrapped as JSON strings via to_jsonb(); the
-- application reseeds all of this data immediately after migrating, so the
-- transitional (non locale-keyed) shape is never actually read.
ALTER TABLE "Course" ALTER COLUMN "title" TYPE JSONB USING to_jsonb("title");
ALTER TABLE "Course" ALTER COLUMN "description" TYPE JSONB USING to_jsonb("description");
ALTER TABLE "Module" ALTER COLUMN "title" TYPE JSONB USING to_jsonb("title");
ALTER TABLE "Lesson" ALTER COLUMN "title" TYPE JSONB USING to_jsonb("title");
ALTER TABLE "Lesson" ALTER COLUMN "summary" TYPE JSONB USING to_jsonb("summary");
ALTER TABLE "Question" ALTER COLUMN "prompt" TYPE JSONB USING to_jsonb("prompt");
