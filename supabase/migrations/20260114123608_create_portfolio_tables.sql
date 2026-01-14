/*
  # Portfolio Database Schema
  
  This migration creates the core tables for a professional portfolio application
  that impresses recruiters and companies.

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `status` (text) - 'unread', 'read', 'archived'
      - `created_at` (timestamptz)
      
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `excerpt` (text)
      - `content` (text)
      - `cover_image` (text)
      - `tags` (text[])
      - `published` (boolean)
      - `view_count` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
    - `project_views`
      - `id` (uuid, primary key)
      - `project_name` (text)
      - `viewed_at` (timestamptz)
      - `referrer` (text)
      
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text)
      - `role` (text)
      - `company` (text)
      - `content` (text)
      - `avatar_url` (text)
      - `rating` (integer)
      - `display_order` (integer)
      - `visible` (boolean)
      - `created_at` (timestamptz)
      
    - `resume_downloads`
      - `id` (uuid, primary key)
      - `downloaded_at` (timestamptz)
      - `user_agent` (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access where appropriate
    - Add policies for form submissions
*/

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'archived')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  cover_image text,
  tags text[] DEFAULT '{}',
  published boolean DEFAULT false,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published blog posts are viewable by everyone"
  ON blog_posts
  FOR SELECT
  TO anon
  USING (published = true);

-- Project Views Table
CREATE TABLE IF NOT EXISTS project_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_name text NOT NULL,
  viewed_at timestamptz DEFAULT now(),
  referrer text
);

ALTER TABLE project_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can record project views"
  ON project_views
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  company text NOT NULL,
  content text NOT NULL,
  avatar_url text,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  display_order integer DEFAULT 0,
  visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visible testimonials are viewable by everyone"
  ON testimonials
  FOR SELECT
  TO anon
  USING (visible = true);

-- Resume Downloads Table
CREATE TABLE IF NOT EXISTS resume_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  downloaded_at timestamptz DEFAULT now(),
  user_agent text
);

ALTER TABLE resume_downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can record resume downloads"
  ON resume_downloads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_testimonials_order ON testimonials(display_order, created_at DESC) WHERE visible = true;
CREATE INDEX IF NOT EXISTS idx_project_views_name ON project_views(project_name, viewed_at DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for blog_posts
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_blog_posts_updated_at'
  ) THEN
    CREATE TRIGGER update_blog_posts_updated_at
      BEFORE UPDATE ON blog_posts
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;