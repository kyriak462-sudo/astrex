import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { PRIVACY_POLICY_VERSION, TERMS_VERSION } from "@/lib/legal";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  trustHost: true,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/sign-in",
  },
  events: {
    async createUser({ user }) {
      if (!user.id) return;
      await db.$transaction([
        db.virtualPortfolio.create({
          data: { userId: user.id, balance: 10000 },
        }),
        // OAuth sign-ups (e.g. Google) skip our /api/auth/register route, but the
        // Google button is disabled client-side until the consent checkbox is
        // checked, so it's safe to stamp consent here too.
        db.user.update({
          where: { id: user.id },
          data: {
            consentGiven: true,
            consentAt: new Date(),
            privacyPolicyVersion: PRIVACY_POLICY_VERSION,
            termsVersion: TERMS_VERSION,
          },
        }),
      ]);
    },
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;
        if (!email || !password) return null;

        const user = await db.user.findUnique({ where: { email } });
        if (!user?.passwordHash) return null;

        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid) return null;

        return { id: user.id, name: user.name, email: user.email, image: user.image };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) session.user.id = token.id as string;
      return session;
    },
  },
});
