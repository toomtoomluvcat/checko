import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import { dbconnect } from "@/app/lib/dbconnect";
import adminData from "@/app/model/posts";

const authoption = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;

        if (!username || !password) {
          throw new Error("Username and password are required");
        }

        try {
          await dbconnect();
          const user = await adminData.findOne({ username });
          if (!user) {
            throw new Error("Invalid username or password");
          }

          const matchpassword = await bcrypt.compare(password, user.password);
          if (!matchpassword) {
            throw new Error("Invalid username or password");
          }

          return {
            id: user._id,
            username: user.username,
            role: user.role,
          };
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/coeadmin",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.id = token.id;
      session.username = token.username;
      session.role = token.role;
      return session;
    },
  },
};

const handle = NextAuth(authoption);
export { handle as POST, handle as GET };
