'use server'

import { signOut } from '@/auth'

export async function getUser (credentials: Partial<Record<'username' | 'password', unknown>>) {
  if (credentials.username === 'demo' && credentials.password === 'secure') {
    return {
      id: credentials.username,
      name: credentials.username
    }
  }
  return null
}

export async function signOutServer () {
  await signOut()
}
