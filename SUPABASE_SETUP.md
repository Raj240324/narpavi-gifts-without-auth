# Supabase Setup Guide for Testimonials System

## Prerequisites
- A Supabase account and project
- Node.js and npm installed

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Create a new project
3. Wait for the project to be set up (this may take a few minutes)

## Step 2: Get Your Project Credentials

1. Go to your project dashboard
2. Navigate to Settings > API
3. Copy your Project URL and anon/public key

## Step 3: Set Up Environment Variables

Create a `.env` file in your project root with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Replace the placeholder values with your actual Supabase credentials.

## Step 4: Set Up the Database

1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `supabase-setup.sql` into the editor
4. Run the SQL script

This will create:
- The `testimonials` table with proper structure
- Indexes for better performance
- Row Level Security (RLS) policies
- Sample data

## Step 5: Verify the Setup

1. Go to Table Editor in your Supabase dashboard
2. You should see the `testimonials` table
3. Check that the sample data was inserted

## Step 6: Test the Application

1. Start your development server: `npm run dev`
2. Navigate to `/testimonials`
3. Try submitting a new review
4. Check that it appears in your Supabase database

## Database Schema

The `testimonials` table has the following structure:

```sql
CREATE TABLE testimonials (
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
```

## Security Policies

The system includes Row Level Security (RLS) with the following policies:

- **Public Read Access**: Anyone can view testimonials
- **Public Insert Access**: Anyone can submit a review
- **Authenticated Update Access**: Only authenticated users can update reviews
- **Authenticated Delete Access**: Only authenticated users can delete reviews

## Features

- ✅ Real-time updates using Supabase subscriptions
- ✅ Automatic average rating calculation
- ✅ Review count tracking
- ✅ Category filtering
- ✅ Sorting by date and rating
- ✅ Form validation
- ✅ Error handling with fallback to mock data
- ✅ Responsive design

## Troubleshooting

### Common Issues:

1. **"Missing Supabase environment variables" error**
   - Make sure your `.env` file exists and has the correct variables
   - Restart your development server after adding environment variables

2. **"Error fetching testimonials"**
   - Check that your Supabase URL and key are correct
   - Verify the `testimonials` table exists in your database
   - Check the browser console for detailed error messages

3. **Reviews not appearing**
   - Check the RLS policies in your Supabase dashboard
   - Verify the table structure matches the schema
   - Check the browser network tab for API errors

### Getting Help:

- Check the Supabase documentation: [supabase.com/docs](https://supabase.com/docs)
- Review the browser console for error messages
- Check the Supabase dashboard logs 