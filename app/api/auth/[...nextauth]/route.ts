import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
    // Configure one or more authentication providers
providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "user" },
      password: { label: "Password", type: "password", placeholder: "alphanumeric" }
      //secret: { label: "Secret", type: "text" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      const user = { id: "1", name: "Rohit", email: "rohit@gmail.com" }

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ user, token }) {
          // Persist the OAuth access_token to the token right after signin
          if (user) {
            token.uid = user.id
          }
          return token
        },
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          if (session.user) {
            session.user.id = token.uid
            }
            return session
        }},
    session: { jwt: true }
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
  FacebookProvider({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  })
]
})

console.log("Handler is: " + JSON.stringify(handler));

export { handler as GET, handler as POST }