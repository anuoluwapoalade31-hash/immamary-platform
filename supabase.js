import { createClient } from '@supabase/supabase-js';
import { supabaseUrl, supabaseAnonKey } from './config';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function submitPublicForm(table, values) {
  if (!supabase) throw new Error('Online submissions are not connected yet. Please contact the organization directly.');
  const { error } = await supabase.from(table).insert(values);
  if (error) throw error;
}
