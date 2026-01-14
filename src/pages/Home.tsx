
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../module.css/Home.module.css'
import codingImg from '../assets/sabelo.png'
import { Link } from 'react-router-dom';
import projectStyles from '../module.css/Projects.module.css'
import JobTracker from "../assets/job-tracker.webp";
import linkVault from "../assets/Link-vault.png";
import shoppingList from "../assets/shoppinglist.png";
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();
  const projects = [
    {
      title: "Link Vault",
      description:
        "A smart bookmark manager that saves links with titles/previews and makes them easy to search. Organize with tags/collections, import/export in bulk, and share curated sets.",
      link: "https://your-portfolio-live-link.example.com",
      imageSrc: linkVault,
      imageAlt: "Screenshot preview of the portfolio website",
    },
    {
      title: "Job Application Tracker",
      description:
        "A personal CRM for your job hunt that tracks roles, stages, contacts, and outcomes. It adds reminders, notes, and simple analytics so you know what to do next and where you’re stuck.",
      link: "https://job-app-tracker-qzko.onrender.com",
      imageSrc: JobTracker,
      imageAlt: "job application tracker",
    },
    {
      title: "Shopping List API",
      description:
        "A collaborative grocery planner with multiple lists, real-time sync, and categories for faster shopping. It can remember prices, track budgets, and turn recipes into checkable lists.",
      link: "https://shopping-list-app-pfno.onrender.com",
      imageSrc: shoppingList,
      imageAlt: "Dashboard analytics preview",
    },
  ];
  return (
    <div>
      <Navbar />
      <main className={styles.heroContainer}>
        <div className={styles.heroCard} data-reveal>
          <div className={styles.heroContent}>
            <h1 className={styles.title} data-reveal>Hi, I'm Sabelo Gumede</h1>
            <p 
              className={styles.subtitle} 
              data-reveal
              style={{
                display: 'block',
                color: '#333',
                opacity: 1,
                visibility: 'visible',
                fontSize: '18px',
                margin: '20px 0',
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              Full-Stack Developer / Cloud & Software Engineer with strong end‑user
              support background and hands‑on experience with React, TypeScript, and Node.js
              projects.
              <br />
              <br />
              Comfortable with Microsoft 365 environments, ticketing/SLAs, and
              building small full‑stack apps (REST APIs + modern front‑ends). Keen
              to grow within managed services, cloud operations, or a junior
              full‑stack role.
            </p>
            <div className={styles.actions} data-reveal>
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
          </div>
          <div className={styles.heroImage}>
            <img
              src={codingImg}
              alt="Developer at work"
              className={styles.illustration}
              data-reveal
            />
          </div>
        </div>
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
            <article key={p.title} className={projectStyles.card} data-reveal>
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
          <div className={styles.statCard} data-reveal>
            <div className={styles.statNumber}>3+</div>
            <div className={styles.statLabel}>Years learning & building</div>
          </div>
          <div className={styles.statCard} data-reveal>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Projects & demos</div>
          </div>
          <div className={styles.statCard} data-reveal>
            <div className={styles.statNumber}>7+</div>
            <div className={styles.statLabel}>Core technologies</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
