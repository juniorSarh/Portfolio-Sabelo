# Portfolio Setup Guide

This guide will help you set up your enhanced portfolio with all the premium features.

## Features Overview

Your portfolio now includes:

1. **Functional Contact Form** - Messages are saved to Supabase database
2. **Testimonials Section** - Display recommendations from colleagues and clients
3. **Blog/Articles Section** - Share your insights and build thought leadership
4. **Analytics Tracking** - Track project views and resume downloads
5. **SEO Optimization** - Improved meta tags and Open Graph support
6. **Professional Design** - Clean, modern UI with smooth animations

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- A Supabase account (free tier is sufficient)

## Database Setup

Your portfolio uses Supabase for data persistence. The database schema has already been created with the following tables:

- `contact_submissions` - Stores contact form messages
- `blog_posts` - Manages blog articles
- `testimonials` - Displays recommendations
- `project_views` - Tracks project engagement
- `resume_downloads` - Monitors resume downloads

## Configuration Steps

### 1. Create a Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with your GitHub account or email
4. Create a new project:
   - Choose a project name (e.g., "portfolio-sabelo")
   - Set a database password (save this securely)
   - Select a region close to your target audience
   - Choose the free tier
5. Wait for the project to be provisioned (2-3 minutes)

### 2. Get Your Supabase Credentials

1. Once your project is ready, go to Project Settings
2. Navigate to **API** section
3. You'll need two values:
   - **Project URL** (starts with `https://`)
   - **Anon/Public Key** (a long string starting with `eyJ`)

### 3. Configure Environment Variables

1. Create a `.env` file in the project root
2. Add your Supabase credentials:

```bash
VITE_SUPABASE_URL=your-project-url-here
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**Example:**
```bash
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSI...
```

### 4. Apply Database Migrations

The database schema should already be applied. To verify:

1. Go to your Supabase dashboard
2. Click on **SQL Editor**
3. You should see tables: `contact_submissions`, `blog_posts`, `testimonials`, `project_views`, `resume_downloads`

If tables are missing, the migration SQL is available in the project.

### 5. Add Sample Data (Optional)

Sample testimonials and blog posts have been added to your database. To view them:

1. Go to **Table Editor** in Supabase dashboard
2. Select `testimonials` or `blog_posts` tables
3. You'll see the pre-populated data

To add your own content:

**Testimonials:**
```sql
INSERT INTO testimonials (name, role, company, content, rating, visible)
VALUES (
  'John Doe',
  'Senior Developer',
  'Tech Company',
  'Great developer with excellent skills...',
  5,
  true
);
```

**Blog Posts:**
```sql
INSERT INTO blog_posts (title, slug, excerpt, content, tags, published)
VALUES (
  'My Blog Post',
  'my-blog-post',
  'A short excerpt...',
  'Full article content here...',
  ARRAY['Technology', 'Web Dev'],
  true
);
```

## Running the Application

### Development Mode

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
6. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables in Netlify dashboard
7. Deploy

## Features Guide

### Contact Form

The contact form automatically saves submissions to your Supabase database. To view submissions:

1. Go to Supabase dashboard
2. Navigate to **Table Editor** → `contact_submissions`
3. View all messages with timestamps

### Blog Management

To add new blog posts:

1. Go to Supabase dashboard
2. Navigate to **Table Editor** → `blog_posts`
3. Click "Insert" → "Insert row"
4. Fill in:
   - `title` - Post title
   - `slug` - URL-friendly version (e.g., "my-first-post")
   - `excerpt` - Short description
   - `content` - Full article text
   - `tags` - Array of tags
   - `published` - Set to `true` to make it visible
5. Save

### Analytics Dashboard

View your portfolio analytics:

1. **Project Views**: See which projects get the most attention
   - Table: `project_views`

2. **Resume Downloads**: Track how many times your resume is downloaded
   - Table: `resume_downloads`

You can query these tables to generate insights:

```sql
-- Most viewed projects
SELECT project_name, COUNT(*) as views
FROM project_views
GROUP BY project_name
ORDER BY views DESC;

-- Resume downloads per day
SELECT DATE(downloaded_at) as date, COUNT(*) as downloads
FROM resume_downloads
GROUP BY DATE(downloaded_at)
ORDER BY date DESC;
```

### Managing Testimonials

To update testimonials:

1. Go to **Table Editor** → `testimonials`
2. Edit existing ones or add new entries
3. Set `visible` to `true` to display on the portfolio
4. Use `display_order` to control the order (lower numbers appear first)

## Security Notes

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Use environment variables** - Always store secrets in environment variables
3. **Row Level Security** - All tables have RLS enabled for security
4. **Public access** - Only published content (blog posts, testimonials) is visible to visitors

## Troubleshooting

### Issue: "Database connection failed"

**Solution:** Check your `.env` file and ensure credentials are correct

### Issue: "Testimonials not showing"

**Solution:**
1. Check if testimonials exist in database
2. Ensure `visible` column is set to `true`
3. Check browser console for errors

### Issue: "Blog posts not appearing"

**Solution:**
1. Verify `published` column is set to `true`
2. Check that content has proper data
3. Clear browser cache

### Issue: "Contact form not working"

**Solution:**
1. Check Supabase credentials in `.env`
2. Verify RLS policies allow anonymous inserts
3. Check browser console for errors

## Support

For issues or questions:
- Check the [Supabase documentation](https://supabase.com/docs)
- Review the code comments in the project
- Open an issue on the GitHub repository

## Next Steps

1. **Customize Content**: Update all text, images, and projects
2. **Add Your Resume**: Replace the PDF in `src/assets/`
3. **Write Blog Posts**: Share your knowledge and insights
4. **Collect Testimonials**: Ask colleagues for recommendations
5. **Monitor Analytics**: Track engagement and optimize
6. **SEO Optimization**: Update meta tags with your information
7. **Social Sharing**: Test Open Graph tags on social media

Your portfolio is now ready to impress recruiters and companies!
