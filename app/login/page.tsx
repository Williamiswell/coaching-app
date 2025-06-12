// app/login/page.tsx
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { cookies } from 'next/headers'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default async function LoginPage() {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={[]} // tu peux ajouter Google, GitHub plus tard
      />
    </div>
  )
}


