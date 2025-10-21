import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "../module.css/Projects.module.css"
import codingImg from "../assets/coding.png"
import reactLogo from "../assets/react.svg"

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal site built with React + Vite, featuring responsive layout and clean routing.",
      link: "https://your-portfolio-live-link.example.com",
      imageSrc: codingImg,
      imageAlt: "Screenshot preview of the portfolio website",
    },
    {
      title: "E-commerce Demo",
      description: "Mock storefront with product list, cart, and checkout flow.",
      link: "https://your-ecommerce-live-link.example.com",
      imageSrc: reactLogo,
      imageAlt: "E-commerce demo logo",
    },
    {
      title: "Dashboard App",
      description: "Analytics dashboard with charts and filters.",
      link: "https://your-dashboard-live-link.example.com",
      imageSrc: codingImg,
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
