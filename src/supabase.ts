import { createClient } from '@supabase/supabase-js';
const url = import.meta.env.VITE_SUPABASE_URL?.trim();
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();
export const cloudConfigured = Boolean(url && publishableKey);
// Only the public/publishable key belongs in this browser app. Never use a service-role key.
export const supabase = cloudConfigured ? createClient(url!, publishableKey!, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }) : null;
