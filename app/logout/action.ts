// app/logout/action.ts
'use server'

import { createClientAction } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export async function POST() {
  const supabase = createClientAction()
  await supabase.auth.signOut()
  redirect('/login')
}
