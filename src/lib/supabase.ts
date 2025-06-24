import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for testimonials
export interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  product: string;
  category: string;
  date: string;
  location: string;
  verified: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface CreateReviewData {
  name: string;
  rating: number;
  review: string;
  product: string;
  category: string;
  location?: string;
  verified?: boolean;
} 