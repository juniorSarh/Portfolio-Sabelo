import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../module.css/Contact.module.css";
import { Mail, MapPin, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAnalytics } from '../hooks/useAnalytics';

export default function Contact() {
  const { trackResumeDownload } = useAnalytics();

  useEffect(() => {
    document.title = 'Contact Me | Sabelo Gumede - Full Stack Developer';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Sabelo Gumede for collaboration, job opportunities, or just to say hello!');
    }
  }, []);

  const handleResumeDownload = () => {
    trackResumeDownload();
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            status: 'unread'
          }
        ]);

      if (error) throw error;

      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <section className={styles.heroCard}>
            <h1 className={styles.title}>Let's Work Together</h1>
            <p className={styles.subtitle}>
              I'm currently open to new opportunities, freelance work, and collaborations. 
              Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
            </p>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <div>
                  <h3>Email Me</h3>
                  <a href="mailto:Sabelohgumede@gmail.com">Sabelohgumede@gmail.com</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <div>
                  <h3>Location</h3>
                  <p>South Africa (Remote-friendly)</p>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/sabelogumede/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className={styles.socialIcon} />
              </a>
              <a href="https://github.com/juniorSarh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className={styles.socialIcon} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className={styles.socialIcon} />
              </a>
            </div>
          </section>

          <section className={styles.formSection}>
            <h2 className={styles.formTitle}>Send Me a Message</h2>
            {submitStatus && (
              <div className={`${styles.alert} ${submitStatus.success ? styles.success : styles.error}`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </section>
        </div>

        <section className={styles.quickLinks}>
          <h2 className={styles.sectionTitle}>Quick Actions</h2>
          <div className={styles.actionButtons}>
            <a
              href="/src/assets/Sabelo-Gumede-Full-Stack-Developer.pdf"
              download
              className={styles.actionButton}
              onClick={handleResumeDownload}
            >
              <Download className={styles.buttonIcon} />
              <span>Download CV</span>
            </a>
            <a 
              href="/projects" 
              className={styles.actionButton}
            >
              <span>View Projects</span>
            </a>
            <a 
              href="mailto:Sabelohgumede@gmail.com" 
              className={styles.actionButton}
            >
              <Mail className={styles.buttonIcon} />
              <span>Email Me</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
