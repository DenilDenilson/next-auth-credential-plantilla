import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { getUser } from './app/server/authsFunctions'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
        const user = await getUser(credentials)
        return user
      }
    }
    )],
  callbacks: {
    async jwt ({ token, user }) {
      if (user !== undefined) {
        token.expiresAt = Math.floor(Date.now() / 1000) + 5
      }
      return token
    },

    async session ({ session, token }) {
      session.expires = token.expiresAt as Date & string
      return session
    }
  },
  pages: {
    signIn: '/login'
    // signOut: '/api/auth/signout',
    // error: '/error'
  }
})
