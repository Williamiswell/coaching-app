// lib/supabase.ts
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { createBrowserClient } from '@supabase/auth-helpers-nextjs'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const createClient = () => createServerComponentClient({ cookies })
export const createClientAction = () => createServerActionClient({ cookies })
export const createBrowserSupabaseClient = () => createBrowserClient()
