
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../module.css/Home.module.css'
import codingImg from '../assets/sabelo.png'
import { Link } from 'react-router-dom';
import projectStyles from '../module.css/Projects.module.css'
import JobTracker from "../assets/job-tracker.webp";
import linkVault from "../assets/Link-vault.png";
import shoppingList from "../assets/shoppinglist.png";

export default function Home() {
  const projects = [
    {
      title: "Link Vault",
      description:
        "Link vault built with React + Vite, featuring responsive layout and clean routing.",
      link: "https://your-portfolio-live-link.example.com",
      imageSrc: linkVault,
      imageAlt: "Screenshot preview of the portfolio website",
    },
    {
      title: "Job Application Tracker",
      description:
        "Job application tracker built with React + Vite, featuring responsive layout and clean routing.",
      link: "https://job-app-tracker-qzko.onrender.com",
      imageSrc: JobTracker,
      imageAlt: "job application tracker",
    },
    {
      title: "Shopping List API",
      description:
        "Shopping list app built with React + Vite, featuring responsive layout and clean routing.",
      link: "https://shopping-list-app-pfno.onrender.com",
      imageSrc: shoppingList,
      imageAlt: "Dashboard analytics preview",
    },
  ];
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
            <Link to="/projects"
              className={styles.buttonPrimary}
              aria-label="View my projects"
            >
              View Projects
            </Link>
            <Link to="/contact"
              className={styles.buttonGhost}
              aria-label="Get in touch"
            >
              Get in touch
            </Link>
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
        <section className={projectStyles.grid}>
          {projects.map((p) => (
            <article key={p.title} className={projectStyles.card}>
              <div className={projectStyles.thumbWrap}>
                <img src={p.imageSrc} alt={p.imageAlt} className={projectStyles.thumb} />
              </div>
              <div className={projectStyles.body}>
                <h2 className={projectStyles.title}>{p.title}</h2>
                <p className={projectStyles.desc}>{p.description}</p>
              </div>
              <div className={projectStyles.actions}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title}`}
                  className={projectStyles.button}
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </section>
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
