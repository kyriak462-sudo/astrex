import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/email";

const CODE_TTL_MS = 10 * 60 * 1000;

function generateCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export async function issueVerificationCode(email: string) {
  await db.verificationToken.deleteMany({ where: { identifier: email } });
  const code = generateCode();
  await db.verificationToken.create({
    data: { identifier: email, token: code, expires: new Date(Date.now() + CODE_TTL_MS) },
  });
  await sendVerificationEmail(email, code);
}
