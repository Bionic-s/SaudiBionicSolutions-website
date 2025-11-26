import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vtipzfauedtdbjkbouxv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0aXB6ZmF1ZWR0ZGJqa2JvdXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4NDMzMTcsImV4cCI6MjA3ODQxOTMxN30.y33rOC1h_bPW73GqrrSPOMBF0CRYmi39JUFh08AL2WY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
