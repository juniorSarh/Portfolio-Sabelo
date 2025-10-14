
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "../module.css/About.module.css"
export default function About() {
  return (
    <div>
      <Navbar/>
              <main className={styles.main}>
                <h1 className={styles.heading}>Full-Stack Developer</h1>
                <p className={styles.lead}>
                  Hi there 👋 I am a passionate and detail-oriented software developer with a strong command of modern
                  programming languages, frameworks, and development methodologies.
                </p>

                <section className={styles.sectionGrid}>
                  <article className={styles.card}>
                    <h2 className={styles.cardTitle}>About Me</h2>
                    <ul className={styles.skills}>
                      <li className={styles.skillChip}>Full-stack developer</li>
                      <li className={styles.skillChip}>Former IT Support</li>
                      <li className={styles.skillChip}>IoT Facilitator</li>
                      <li className={styles.skillChip}>Lifelong learner</li>
                      <li className={styles.skillChip}>Tech enthusiast</li>
                    </ul>
                  </article>

                  <article className={styles.card}>
                    <h2 className={styles.cardTitle}>Skills & Technologies</h2>
                    <div style={{ display:'grid', gap: 10 }}>
                      <div>
                        <strong>Languages</strong>
                        <ul className={styles.skills}>
                          <li className={styles.skillChip}>JavaScript</li>
                          <li className={styles.skillChip}>Python</li>
                          <li className={styles.skillChip}>C#</li>
                          <li className={styles.skillChip}>SQL</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Front-End</strong>
                        <ul className={styles.skills}>
                          <li className={styles.skillChip}>React</li>
                          <li className={styles.skillChip}>HTML5</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Back-End</strong>
                        <ul className={styles.skills}>
                          <li className={styles.skillChip}>Node.js / Express</li>
                          <li className={styles.skillChip}>ASP.NET Core</li>
                          <li className={styles.skillChip}>RESTful APIs</li>
                        </ul>
                      </div>
                      <div>
                        <strong>IoT & Embedded</strong>
                        <ul className={styles.skills}>
                          <li className={styles.skillChip}>Arduino</li>
                          <li className={styles.skillChip}>Raspberry Pi</li>
                        </ul>
                      </div>
                    </div>
                  </article>

                  <article className={styles.card}>
                    <h2 className={styles.cardTitle}>Contact Me</h2>
                    <p style={{ margin: 0 }}>
                      📧 Email: <a href="mailto:Sabelohgumede@gmail.com">Sabelohgumede@gmail.com</a>
                    </p>
                    <p style={{ margin: '8px 0 0 0' }}>
                      💼 LinkedIn: <a href="https://www.linkedin.com/in/sabelogumede/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/sabelogumede/</a>
                    </p>
                  </article>
                </section>
              </main>
              <Footer/>
    </div>
  )
}
