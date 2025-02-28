
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://urlpcbatnzytwowhvwby.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVybHBjYmF0bnp5dHdvd2h2d2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NTcyMDYsImV4cCI6MjA1NjMzMzIwNn0.Fm2W4t6KC4utNN0KqteZRGcsJCuIli-X8YUVSVopWo0";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
