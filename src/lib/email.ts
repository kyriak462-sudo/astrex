import { Resend } from "resend";

const FROM = process.env.RESEND_FROM ?? "ASTREX <onboarding@resend.dev>";

export async function sendVerificationEmail(email: string, code: string) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: FROM,
    to: email,
    subject: `${code} — your ASTREX verification code`,
    html: `
      <div style="font-family: sans-serif; background: #000; color: #fff; padding: 32px; border-radius: 16px;">
        <p style="font-size: 14px; letter-spacing: 0.1em; color: #888; text-transform: uppercase; margin: 0 0 16px;">ASTREX</p>
        <p style="font-size: 15px; color: #ccc; margin: 0 0 20px;">Your verification code is:</p>
        <p style="font-size: 36px; font-weight: 700; letter-spacing: 0.15em; margin: 0 0 20px;">${code}</p>
        <p style="font-size: 13px; color: #888; margin: 0;">This code expires in 10 minutes. If you didn't request this, you can ignore this email.</p>
      </div>
    `,
  });
}
