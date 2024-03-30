import { createClient } from '@supabase/supabase-js'
import type { Database } from '$lib/types/supabase';
import { SUPABASE_KEY, SUPABASE_URL } from '$env/static/private';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
