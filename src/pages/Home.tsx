
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../module.css/Home.module.css'
import codingImg from '../assets/sabelo.png'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.hero}>
        <section className={styles.heroCard}>
          <h1 className={styles.title}>Hi, I'm Sabelo Gumede</h1>
          <p className={styles.subtitle}>
            Full-Stack Developer/ cloud & software engineer with strong end‑user
            support background and hands‑on React/TypeScript and Node.js
            projects.
            <br />
            <br />
            Comfortable with Microsoft 365 environments, ticketing/SLAs, and
            building small full‑stack apps (REST APIs + modern front‑ends). Keen
            to grow within managed services, cloud operations, or a junior
            full‑stack role.
          </p>
          <br />
          <br />
          <div className={styles.actions}>
            <a
              href="/projects"
              className={styles.buttonPrimary}
              aria-label="View my projects"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className={styles.buttonGhost}
              aria-label="Get in touch"
            >
              Get in touch
            </a>
          </div>
        </section>

        <section className={styles.visual}>
          <img
            src={codingImg}
            alt="Developer at work"
            className={styles.illustration}
          />
        </section>
      </main>
      {/* <div className={styles.features}>
        <span className={styles.chip}>Full-stack developer</span>
        <span className={styles.chip}>IoT Facilitator</span>
        <span className={styles.chip}>IT Support</span>
        <span className={styles.chip}>React & TypeScript</span>
        <span className={styles.chip}>Open to opportunities</span>
      </div> */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Featured Projects</h2>
        <div className={styles.miniGrid}>
          <article className={styles.miniCard}>
            <h3 className={styles.miniTitle}>Portfolio Website</h3>
            <p>A fast, responsive portfolio built with React + Vite.</p>
            <a
              href="/projects"
              className={styles.miniLink}
              aria-label="See projects"
            >
              See more →
            </a>
          </article>
          <article className={styles.miniCard}>
            <h3 className={styles.miniTitle}>E-commerce Demo</h3>
            <p>Mock storefront with cart and checkout flows.</p>
            <a
              href="/projects"
              className={styles.miniLink}
              aria-label="See projects"
            >
              See more →
            </a>
          </article>
          <article className={styles.miniCard}>
            <h3 className={styles.miniTitle}>Analytics Dashboard</h3>
            <p>Data visualizations with filters and insights.</p>
            <a
              href="/projects"
              className={styles.miniLink}
              aria-label="See projects"
            >
              See more →
            </a>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Quick Stats</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>3+</div>
            <div className={styles.statLabel}>Years learning & building</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Projects & demos</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>7+</div>
            <div className={styles.statLabel}>Core technologies</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
