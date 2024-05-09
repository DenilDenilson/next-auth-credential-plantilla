'use server'

import { signIn, signOut } from '@/auth'

export async function getUser (credentials: Partial<Record<'username' | 'password', unknown>>) {
  if (credentials.username === 'demo' && credentials.password === 'secure') {
    console.log('Usuario correcto')
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

export async function signInServer (credentials: Partial<Record<'username' | 'password', unknown>>): Promise<{ error: boolean }> {
  console.log('Iniciando sesión...')
  try {
    await signIn('credentials', credentials)
    return { error: false }
  } catch (error) {
    console.error('Error al iniciar sesión:')
    return { error: true }
  }
}
