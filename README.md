# Sabelo Gumede - Premium Portfolio

A professional, feature-rich portfolio website built with React, TypeScript, Vite, and Supabase. Designed to impress recruiters and companies with advanced features, analytics, and a modern, polished design.

## ✨ Premium Features

### Core Features
- ⚡ **Lightning-fast performance** with Vite and optimized builds
- 🎨 **Modern, professional UI** with smooth animations and micro-interactions
- 📱 **Fully responsive** design optimized for all devices
- 🎭 **Advanced scroll animations** and reveal effects
- 🔍 **SEO optimized** with meta tags and Open Graph support

### Interactive Components
- 📝 **Functional contact form** - Messages saved to database with real-time validation
- 💬 **Testimonials section** - Display professional recommendations with ratings
- 📚 **Blog/Articles system** - Share insights and build thought leadership
- 🎯 **3D Tech Stack visualization** - Interactive globe showcasing technologies
- 📊 **Project showcase** - Detailed case studies with live demos

### Analytics & Insights
- 📈 **Project view tracking** - Monitor which projects attract the most interest
- 📥 **Resume download tracking** - Track engagement with your CV
- 📧 **Contact form analytics** - Manage and respond to inquiries
- 👀 **Blog post views** - See which articles resonate with your audience

### Professional Tools
- 🗄️ **Supabase database** - Secure, scalable backend with Row Level Security
- 🔐 **Data persistence** - All interactions safely stored and queryable
- 📱 **Real-time updates** - Dynamic content management without redeployment
- 🎯 **Tag-based filtering** - Easy content discovery for visitors

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: CSS Modules with responsive design patterns
- **Build Tool**: Vite 7 (latest)
- **Backend**: Supabase (PostgreSQL, Row Level Security)
- **3D Graphics**: Three.js for tech stack visualization
- **Icons**: Lucide React for consistent, scalable icons
- **Animations**: Framer Motion + custom scroll reveals
- **Routing**: React Router DOM v7

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher) or yarn (v1.22 or higher)
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-sabelo.git
   cd portfolio-sabelo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```bash
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

   **See SETUP.md for detailed Supabase configuration**

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```
   The production build will be created in the `dist` directory.

### Full Setup Guide

For complete setup instructions including database configuration, sample data, and deployment:

📖 **[Read the detailed SETUP.md guide](./SETUP.md)**

## 🏗️ Project Structure

```
portfolio-sabelo/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, PDFs, fonts
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.tsx          # Navigation with active states
│   │   ├── Footer.tsx          # Site footer with links
│   │   ├── Testimonials.tsx    # Dynamic testimonials section
│   │   └── SEO.tsx             # SEO meta tags component
│   ├── pages/                   # Route pages
│   │   ├── Home.tsx            # Landing page with hero
│   │   ├── About.tsx           # Professional experience
│   │   ├── Projects.tsx        # Project showcase
│   │   ├── TechStack.tsx       # 3D tech visualization
│   │   ├── Blog.tsx            # Articles listing
│   │   ├── BlogPost.tsx        # Individual article view
│   │   └── Contact.tsx         # Contact form + quick actions
│   ├── module.css/             # CSS Modules for components
│   ├── styles/                 # Global styles
│   ├── hooks/                  # Custom React hooks
│   │   ├── useScrollReveal.ts  # Scroll animation hook
│   │   └── useAnalytics.ts     # Analytics tracking hook
│   ├── lib/                    # External integrations
│   │   └── supabase.ts         # Supabase client & types
│   ├── App.tsx                 # Route configuration
│   └── main.tsx                # Application entry
├── .env.example                # Environment template
├── SETUP.md                    # Detailed setup guide
├── README.md                   # This file
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 📊 Database Schema

The portfolio uses Supabase with the following tables:

| Table | Purpose | Key Features |
|-------|---------|--------------|
| `contact_submissions` | Store contact form messages | Status tracking, timestamps |
| `blog_posts` | Manage articles | Tags, view counts, publish status |
| `testimonials` | Display recommendations | Ratings, visibility control, ordering |
| `project_views` | Track project engagement | Project name, referrer, timestamp |
| `resume_downloads` | Monitor CV downloads | User agent, timestamp |

All tables have Row Level Security (RLS) enabled for data protection.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy automatically

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in dashboard
5. Deploy

Both platforms offer:
- Automatic deployments on push
- Preview deployments for PRs
- Custom domains
- SSL certificates
- Edge CDN

## 🎯 Key Highlights for Recruiters

This portfolio demonstrates:

- **Full-Stack Capabilities**: Frontend (React/TypeScript) + Backend (Supabase/PostgreSQL)
- **Modern Best Practices**: TypeScript, CSS Modules, component architecture
- **Database Design**: Normalized schema, RLS, proper indexing
- **User Experience**: Responsive design, animations, accessibility
- **Professional Features**: Blog system, analytics, testimonials
- **SEO & Performance**: Optimized meta tags, lazy loading, code splitting
- **Security**: Row Level Security, environment variables, input validation
- **Version Control**: Clean Git history, organized project structure

## 🛠️ Customization

### Update Personal Information

1. **Content**: Edit text in page components (`src/pages/`)
2. **Projects**: Update project arrays with your work
3. **Resume**: Replace PDF in `src/assets/`
4. **Social Links**: Update URLs in Footer and Contact pages
5. **Meta Tags**: Modify SEO information in `index.html` and SEO component

### Add Blog Posts

Use Supabase dashboard or SQL:

```sql
INSERT INTO blog_posts (title, slug, excerpt, content, tags, published)
VALUES (
  'Your Article Title',
  'article-url-slug',
  'Brief description...',
  'Full article content...',
  ARRAY['React', 'TypeScript'],
  true
);
```

### Manage Testimonials

```sql
INSERT INTO testimonials (name, role, company, content, rating, visible)
VALUES (
  'Jane Doe',
  'Senior Engineer',
  'Tech Corp',
  'Excellent developer...',
  5,
  true
);
```

## 📈 Analytics & Insights

View your portfolio analytics in Supabase:

```sql
-- Total contact submissions
SELECT COUNT(*) FROM contact_submissions;

-- Most popular projects
SELECT project_name, COUNT(*) as views
FROM project_views
GROUP BY project_name
ORDER BY views DESC;

-- Resume download stats
SELECT COUNT(*) as total_downloads
FROM resume_downloads;

-- Blog post performance
SELECT title, view_count
FROM blog_posts
WHERE published = true
ORDER BY view_count DESC;
```

## 🔒 Security Features

- **Row Level Security (RLS)**: All database tables protected
- **Anonymous Access**: Only for public data (blog posts, testimonials)
- **Environment Variables**: Sensitive data never exposed in code
- **Input Validation**: Form data sanitized before storage
- **Type Safety**: TypeScript ensures data integrity
- **CORS Protection**: Supabase handles cross-origin requests

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- **Email**: Sabelohgumede@gmail.com
- **LinkedIn**: [Sabelo Gumede](https://linkedin.com/in/sabelogumede)
- **GitHub**: [@juniorSarh](https://github.com/juniorSarh)

## 🌟 Acknowledgments

Built with modern technologies:
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Supabase](https://supabase.com/) - Backend platform
- [Three.js](https://threejs.org/) - 3D graphics
- [Lucide](https://lucide.dev/) - Icon library

---

Made with care by Sabelo Gumede. Ready to impress recruiters and land your dream job!
