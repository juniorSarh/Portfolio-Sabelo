import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';
import type { BlogPost as BlogPostType } from '../lib/supabase';
import styles from '../module.css/BlogPost.module.css';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setPost(data);
        document.title = `${data.title} | Sabelo Gumede`;

        await supabase
          .from('blog_posts')
          .update({ view_count: data.view_count + 1 })
          .eq('id', data.id);
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
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

  if (loading) {
    return (
      <div className={styles.pageContainer}>
        <Navbar />
        <main className={styles.main}>
          <div className={styles.loadingState}>
            <p>Loading article...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className={styles.pageContainer}>
        <Navbar />
        <main className={styles.main}>
          <div className={styles.notFound}>
            <h1>Article Not Found</h1>
            <p>The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog" className={styles.backLink}>
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
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
        <article className={styles.article}>
          <Link to="/blog" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <header className={styles.header}>
            <h1 className={styles.title}>{post.title}</h1>

            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <Calendar size={18} />
                {formatDate(post.created_at)}
              </span>
              <span className={styles.metaItem}>
                <Clock size={18} />
                {readingTime(post.content)}
              </span>
            </div>

            {post.tags.length > 0 && (
              <div className={styles.tags}>
                <Tag size={18} />
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {post.cover_image && (
            <div className={styles.coverImage}>
              <img src={post.cover_image} alt={post.title} />
            </div>
          )}

          <div className={styles.content}>
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <footer className={styles.footer}>
            <Link to="/blog" className={styles.backButton}>
              <ArrowLeft size={20} />
              Back to All Articles
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}
