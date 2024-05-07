/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { signInServer } from '../server/authsFunctions'

export default function Page () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        className="flex flex-col gap-4"
        action={ async (formData) => {
          const credentials = Object.fromEntries(formData)
          const { error } = await signInServer(credentials)
          if (error) {
            alert('Error al iniciar sesión')
          }
        }}
      >
        <label htmlFor="username">Username</label>
        <input type="text" name="username" className= "text-black" id="username"/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" className= "text-black" id="password" />
        <button type="submit">Inicia sesión</button>
      </form>
    </main>
  )
}
