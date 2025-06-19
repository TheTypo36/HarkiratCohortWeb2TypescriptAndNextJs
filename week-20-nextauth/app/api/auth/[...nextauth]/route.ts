import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

console.log(process.env.NEXTAUTH_SECRET);
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "username",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Full Name" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "enter the password",
        },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        const user = {
          id: "1",
          name: username,
          email: "thetypo@gmail.com",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export const GET = handler;
export const POST = handler;
