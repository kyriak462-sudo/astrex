-- Add GDPR consent tracking fields to User.
ALTER TABLE "User" ADD COLUMN "consentGiven" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "User" ADD COLUMN "consentAt" TIMESTAMP(3);
ALTER TABLE "User" ADD COLUMN "privacyPolicyVersion" TEXT;
ALTER TABLE "User" ADD COLUMN "termsVersion" TEXT;
ALTER TABLE "User" ADD COLUMN "signupIp" TEXT;
ALTER TABLE "User" ADD COLUMN "signupUserAgent" TEXT;
