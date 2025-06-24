# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/84f63396-c2e3-4751-9263-ee3a79d0006a

## Features

### Testimonials System with Supabase Integration
The website includes a comprehensive testimonials system powered by Supabase that allows customers to:

- **Submit Reviews**: Customers can leave reviews after purchasing products through a user-friendly form
- **Review Form Fields**: 
  - Name (required)
  - Product/Service selection (required)
  - Star rating (1-5 stars)
  - Review comment (required)
  - Location (optional)
- **Database Storage**: Reviews are stored in Supabase PostgreSQL database for reliable persistence
- **Real-time Updates**: Live updates when new reviews are submitted using Supabase subscriptions
- **Display Features**:
  - Card-style layout for all reviews
  - Featured review section
  - Filtering by product category
  - Sorting by newest, oldest, or highest rating
  - Automatic average rating calculation
  - Verified customer badges
- **Validation**: Form includes basic validation for required fields
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Security**: Row Level Security (RLS) policies for data protection
- **Error Handling**: Graceful fallback to mock data if database is unavailable

The testimonials page is accessible at `/testimonials` and integrates with the existing website design.

### Supabase Setup
To use the testimonials system, you need to set up Supabase:

1. **Create a Supabase project** at [supabase.com](https://supabase.com)
2. **Set up environment variables** in a `.env` file:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
3. **Run the database setup script** (`supabase-setup.sql`) in your Supabase SQL Editor
4. **Follow the detailed setup guide** in `SUPABASE_SETUP.md`

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/84f63396-c2e3-4751-9263-ee3a79d0006a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/84f63396-c2e3-4751-9263-ee3a79d0006a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
