import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import LinkedIn from "next-auth/providers/linkedin"
import Twitter from "next-auth/providers/twitter"
import Discord from "next-auth/providers/discord"
import { db } from "@/db/schema"
import { DrizzleAdapter } from "@auth/drizzle-adapter"


export const { handlers, auth, signIn, signOut } = NextAuth({
    //@ts-ignore
    adapter: DrizzleAdapter(db),
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
        Github({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
        LinkedIn({
            clientId: process.env.AUTH_LINKEDIN_ID!,
            clientSecret: process.env.AUTH_LINKEDIN_SECRET!,
        }),
        Twitter({
            clientId: process.env.AUTH_TWITTER_ID!,
            clientSecret: process.env.AUTH_TWITTER_SECRET!,
        }),
        Discord({
            clientId: process.env.AUTH_DISCORD_ID!,
            clientSecret: process.env.AUTH_DISCORD_SECRET!,
        }),
        // Resend({
        //     key: process.env.AUTH_RESEND_KEY!,
        // }),
    ],
})

