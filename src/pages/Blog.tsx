import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';
import type { BlogPost } from '../lib/supabase';
import styles from '../module.css/Blog.module.css';
import { Calendar, Clock, Tag } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Blog() {
  useScrollReveal();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Blog | Sabelo Gumede - Insights & Articles';
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const readingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  );

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  if (loading) {
    return (
      <div className={styles.pageContainer}>
        <Navbar />
        <main className={styles.main}>
          <div className={styles.hero}>
            <h1 className={styles.title}>Blog & Insights</h1>
            <p className={styles.subtitle}>Loading articles...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero} data-reveal>
          <h1 className={styles.title}>Blog & Insights</h1>
          <p className={styles.subtitle}>
            Thoughts on web development, career growth, and technology
          </p>
        </div>

        {allTags.length > 0 && (
          <div className={styles.tagFilter} data-reveal>
            <button
              className={`${styles.tag} ${!selectedTag ? styles.tagActive : ''}`}
              onClick={() => setSelectedTag(null)}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`${styles.tag} ${selectedTag === tag ? styles.tagActive : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className={styles.grid}>
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={styles.card}
              data-reveal
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {post.cover_image && (
                <div className={styles.imageWrapper}>
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className={styles.image}
                  />
                </div>
              )}

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <Calendar size={16} />
                    {formatDate(post.created_at)}
                  </span>
                  <span className={styles.metaItem}>
                    <Clock size={16} />
                    {readingTime(post.content)}
                  </span>
                </div>

                <h2 className={styles.postTitle}>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className={styles.excerpt}>{post.excerpt}</p>

                {post.tags.length > 0 && (
                  <div className={styles.tags}>
                    <Tag size={16} />
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tagBadge}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className={styles.emptyState}>
            <p>No articles found{selectedTag && ` for "${selectedTag}"`}.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
