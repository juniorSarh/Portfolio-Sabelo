import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "../module.css/Projects.module.css"
import JobTracker from "../assets/job-tracker.webp";
import weatherApp from "../assets/weather-app.webp";
import linkVault from "../assets/Link-vault.png";
import shoppingList from "../assets/shoppinglist.png";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
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
      title: "The Weather App",
      description:
        "Shows real-time conditions plus hourly and daily forecasts with alerts. You can search/save locations, switch units, and optionally view air quality or radar.",
      link: "https://weather-application-5r2t.onrender.com",
      imageSrc: weatherApp,
      imageAlt: "weather application imimage",
    },
    {
      title: "Shopping List APP",
      description:
        "A collaborative grocery planner with multiple lists, real-time sync, and categories for faster shopping. It can remember prices, track budgets, and turn recipes into checkable lists.",
      link: "https://shopping-list-app-pfno.onrender.com",
      imageSrc: shoppingList,
      imageAlt: "Dashboard analytics preview",
    },
  ];

  return (
    <div>
      <Navbar/>
      <main className={styles.main}>
        <h1 className={styles.heading} data-reveal>Projects</h1>
        <p className={styles.subheading} data-reveal>A selection of my recent work. Click a project to view it.</p>

        <section className={styles.grid}>
          {projects.map((p) => (
            <article key={p.title} className={styles.card} data-reveal>
              <div className={styles.thumbWrap}>
                <img src={p.imageSrc} alt={p.imageAlt} className={styles.thumb} />
              </div>
              <div className={styles.body}>
                <h2 className={styles.title}>{p.title}</h2>
                <p className={styles.desc}>{p.description}</p>
              </div>
              <div className={styles.actions}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title}`}
                  className={styles.button}
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer/>
    </div>
  )
}
