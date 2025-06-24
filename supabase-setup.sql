-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review TEXT NOT NULL,
    product VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    location VARCHAR(255),
    verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_testimonials_created_at ON testimonials(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_testimonials_category ON testimonials(category);
CREATE INDEX IF NOT EXISTS idx_testimonials_rating ON testimonials(rating);

-- Enable Row Level Security (RLS)
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to testimonials" ON testimonials
    FOR SELECT USING (true);

-- Create policy for inserting testimonials (anyone can submit a review)
CREATE POLICY "Allow public insert access to testimonials" ON testimonials
    FOR INSERT WITH CHECK (true);

-- Create policy for updating testimonials (only verified users or admins)
CREATE POLICY "Allow update access to testimonials" ON testimonials
    FOR UPDATE USING (auth.role() = 'authenticated' OR verified = true);

-- Create policy for deleting testimonials (only admins)
CREATE POLICY "Allow delete access to testimonials" ON testimonials
    FOR DELETE USING (auth.role() = 'authenticated');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_testimonials_updated_at 
    BEFORE UPDATE ON testimonials 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data (optional)
INSERT INTO testimonials (name, rating, review, product, category, location, verified) VALUES
('Sarah Johnson', 5, 'Absolutely stunning pencil portrait of my beloved dog! The attention to detail is incredible and it captures his personality perfectly. Highly recommend!', 'Custom Pet Portrait', 'Pet Portrait', 'New York, NY', true),
('Michael Chen', 5, 'The resin art piece I ordered for my wife''s birthday exceeded all expectations. The colors are vibrant and the craftsmanship is outstanding.', 'Resin Art', 'Resin Art', 'Los Angeles, CA', true),
('Emily Rodriguez', 5, 'Perfect gift for my parents'' anniversary. The custom painting of their wedding photo is beautiful and they were moved to tears when they saw it.', 'Custom Painting', 'Wedding Art', 'Miami, FL', true),
('David Thompson', 5, 'Exceptional quality and fast delivery. The digital art piece I commissioned for my office is exactly what I envisioned. Professional service throughout.', 'Digital Art', 'Digital Art', 'Chicago, IL', true),
('Lisa Wang', 5, 'The memorial portrait of my grandfather is incredibly touching. The artist captured his gentle smile and kind eyes perfectly. Thank you for this precious gift.', 'Memorial Portrait', 'Memorial', 'Seattle, WA', true)
ON CONFLICT DO NOTHING; 