import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function Home () {
  const session = await auth()
  if (session === null) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hola denil - modo público
    </main>
    )
  } else {
    return redirect('/dashboard')
  }
}
