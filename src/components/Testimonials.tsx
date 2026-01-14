import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Testimonial } from '../lib/supabase';
import styles from '../module.css/Testimonials.module.css';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('visible', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? styles.starFilled : styles.starEmpty}
        fill={i < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>What People Say</h2>
          <div className={styles.loadingGrid}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.skeletonCard}></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} data-reveal>
      <div className={styles.container}>
        <h2 className={styles.title} data-reveal>What People Say</h2>
        <p className={styles.subtitle} data-reveal>
          Recommendations from colleagues, clients, and industry professionals
        </p>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={styles.card}
              data-reveal
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className={styles.quoteIcon} />

              <div className={styles.rating}>
                {renderStars(testimonial.rating)}
              </div>

              <p className={styles.content}>"{testimonial.content}"</p>

              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                  <p className={styles.authorCompany}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
