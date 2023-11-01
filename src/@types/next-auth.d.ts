/* eslint-disable @typescript-eslint/no-unused-vars */
import nextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
  }

  interface Session {
    user: User
  }
}
