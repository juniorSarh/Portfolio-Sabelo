import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "../module.css/Contact.module.css"

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <main className={styles.hero}>
        <section className={styles.heroCard}>
          <h1 className={styles.title}>Let’s work together</h1>
          <p className={styles.subtitle}>I’m open to freelance work, full-time roles, and collaborations. The best way to reach me is via email.</p>
          <div className={styles.actions}>
            <a href="mailto:Sabelohgumede@gmail.com" className={styles.buttonPrimary} aria-label="Send me an email">Email Me</a>
            <a href="https://www.linkedin.com/in/sabelogumede/" target="_blank" rel="noopener noreferrer" className={styles.buttonGhost} aria-label="Visit my LinkedIn profile">LinkedIn</a>
          </div>
        </section>

        <section className={styles.panelGrid}>
          <article className={styles.panel}>
            <h2 className={styles.panelTitle}>Quick Links</h2>
            <div className={styles.linkRow}>
              <a href="/src/assets/Sabelo-Gumede-Full-Stack-Developer.pdf" download className={styles.linkButton} aria-label="Download my CV as PDF">Download CV</a>
              <a href="/projects" className={styles.linkButton} aria-label="Browse my projects">See Projects</a>
            </div>
          </article>
          <article className={styles.panel}>
            <h2 className={styles.panelTitle}>Direct Contact</h2>
            <p className={styles.muted}>Email: <a href="mailto:Sabelohgumede@gmail.com">Sabelohgumede@gmail.com</a></p>
            <p className={styles.muted}>Location: South Africa (Remote-friendly)</p>
          </article>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
