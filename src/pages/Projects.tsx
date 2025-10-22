import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "../module.css/Projects.module.css"
import JobTracker from "../assets/job-tracker.webp";
import weatherApp from "../assets/weather-app.webp";
import linkVault from "../assets/Link-vault.png";
import shoppingList from "../assets/shoppinglist.png";

export default function Projects() {
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
      title: "React Weather App",
      description:
        "Weather app built with React + Vite, featuring responsive layout and clean routing.",
      link: "https://your-dashboard-live-link.example.com",
      imageSrc: weatherApp,
      imageAlt: "weather application imimage",
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
      <Navbar/>
      <main className={styles.main}>
        <h1 className={styles.heading}>Projects</h1>
        <p className={styles.subheading}>A selection of my recent work. Click a project to view it.</p>

        <section className={styles.grid}>
          {projects.map((p) => (
            <article key={p.title} className={styles.card}>
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
