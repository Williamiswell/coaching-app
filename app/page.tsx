// app/page.tsx
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase'

export default async function HomePage() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bienvenue, {user.email}</h1>
      <form action="/logout" method="post">
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Se déconnecter
        </button>
      </form>
    </div>
  )
}
``

