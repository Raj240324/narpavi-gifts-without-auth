-- Create wishlist table
CREATE TABLE IF NOT EXISTS wishlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  item_id TEXT NOT NULL,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, item_id)
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS wishlist_user_id_idx ON wishlist(user_id);

-- Enable Row Level Security
ALTER TABLE wishlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to view their own wishlist items
CREATE POLICY "Users can view their own wishlist items"
  ON wishlist FOR SELECT
  USING (auth.uid() = user_id);

-- Create policy to allow users to insert their own wishlist items
CREATE POLICY "Users can insert their own wishlist items"
  ON wishlist FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create policy to allow users to delete their own wishlist items
CREATE POLICY "Users can delete their own wishlist items"
  ON wishlist FOR DELETE
  USING (auth.uid() = user_id); 