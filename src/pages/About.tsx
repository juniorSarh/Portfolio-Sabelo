
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "../module.css/About.module.css"
export default function About() {
  return (
    <div>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroCard}>
          <h1 className={styles.heroTitle}>SABELO GUMEDE</h1>
          <p className={styles.heroSubtitle}>
            Full Stack Developer & Junior Cloud Engineer & Support Technician
          </p>
        </div>
      </section>

      <main className={styles.main}>
        {/* <h1 className={styles.heading}>About Me</h1>
                <p className={styles.lead}>
                  The full-Stack developer/ cloud & software engineer with strong end‑user support background and hands‑on React/TypeScript and Node.js projects. Comfortable with Microsoft 365 environments, ticketing/SLAs, and building small full‑stack apps (REST APIs + modern front‑ends). Keen to grow within managed services, cloud operations, or a junior full‑stack role.
                </p> */}

        <section className={styles.sectionGrid}>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Contact</h2>
            <div style={{ display: "grid", gap: 8 }}>
              <p style={{ margin: 0 }}>
                📧 Email:{" "}
                <a href="mailto:sabelohgumede@gmail.com">
                  sabelohgumede@gmail.com
                </a>
              </p>
              <p style={{ margin: 0 }}>
                📞 Phone: <a href="tel:+27722950140">072-295-0140</a>
              </p>
              <p style={{ margin: 0 }}>📍 Location: Durban, KZN</p>
              <p style={{ margin: 0 }}>🪪 SA Citizen | Code 10 (C1)</p>
              <p style={{ margin: 0 }}>
                🐙 GitHub:{" "}
                <a
                  href="https://github.com/juniorSarh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/juniorSarh
                </a>
              </p>
              <p style={{ margin: 0 }}>
                🔗 LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/sabelogumede"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/sabelogumede
                </a>
              </p>
            </div>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Professional Summary</h2>
            <p style={{ margin: 0 }}>
              The Full-Stack developer/ cloud & software engineer with strong
              end‑user support background and hands‑on React/TypeScript and
              Node.js projects.<br/><br/> Comfortable with Microsoft 365 environments,
              ticketing/SLAs, and building small full‑stack apps (REST APIs +
              modern front‑ends). Keen to grow within managed services, cloud
              operations, or a junior full‑stack role.
            </p>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Core Competencies</h2>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
              <li>
                End‑User Support (remote & on‑site): walk‑throughs, ticket
                triage, incident resolution to SLA/timeframes
              </li>
              <li>
                Hardware & Software Setup: imaging, installs, configuration;
                peripherals (printers/scanners)
              </li>
              <li>
                Application Rollouts: supporting adoption of Microsoft 365
                (Outlook/Teams/OneDrive) and collaboration tools
              </li>
              <li>
                Troubleshooting: Windows desktops/laptops; basic LAN/Wi‑Fi;
                device connectivity
              </li>
              <li>
                Documentation: SOPs, step‑by‑step guides, knowledge‑base
                articles
              </li>
              <li>
                Stakeholder Service: clear communication; calm under pressure;
                team collaboration
              </li>
              <li>
                Foundations: SharePoint end‑user support; Endpoint/Intune basics
                (in progress)
              </li>
            </ul>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Technical Skills</h2>
            <div style={{ display: "grid", gap: 10 }}>
              <div>
                <strong>Languages</strong>
                <ul className={styles.skills}>
                  <li className={styles.skillChip}>JavaScript/TypeScript</li>
                  <li className={styles.skillChip}>Python</li>
                  <li className={styles.skillChip}>C#</li>
                  <li className={styles.skillChip}>SQL</li>
                </ul>
              </div>
              <div>
                <strong>Frontend</strong>
                <ul className={styles.skills}>
                  <li className={styles.skillChip}>React (Vite)</li>
                  <li className={styles.skillChip}>HTML5</li>
                  <li className={styles.skillChip}>CSS Modules</li>
                  <li className={styles.skillChip}>Responsive UI</li>
                </ul>
              </div>
              <div>
                <strong>Backend & APIs</strong>
                <ul className={styles.skills}>
                  <li className={styles.skillChip}>Node.js (Express)</li>
                  <li className={styles.skillChip}>RESTful API design</li>
                </ul>
              </div>
              <div>
                <strong>Dev Tools</strong>
                <ul className={styles.skills}>
                  <li className={styles.skillChip}>Git</li>
                  <li className={styles.skillChip}>GitHub</li>
                  <li className={styles.skillChip}>JSON Server</li>
                  <li className={styles.skillChip}>npm</li>
                </ul>
              </div>
              <div>
                <strong>Cloud / Platforms for CI/CD</strong>
                <ul className={styles.skills}>
                  <li className={styles.skillChip}>Render (deployments)</li>
                  <li className={styles.skillChip}>Versel (deployments)</li>
                  <li className={styles.skillChip}>Netlify (deployments )</li>
                  <li className={styles.skillChip}>Basic Azure fundamentals</li>
                </ul>
              </div>
              <div>
                <strong>IoT / Embedded</strong>
                <ul className={styles.skills}>
                  <li className={styles.skillChip}>Arduino</li>
                  <li className={styles.skillChip}>
                    Raspberry Pi (foundations)
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Certifications</h2>
            <div style={{ display: "grid", gap: 10 }}>
              <div>
                <strong>Completed</strong>
                <ul style={{ margin: 8, marginLeft: 18 }}>
                  <li>Cisco – Introduction to IoT </li>
                  <li>Javascript algorithm and Data structures</li>
                  <li>Web responsive design</li>
                  <li>Database Design</li>
                </ul>
              </div>
              {/* <div>
                <strong>Studying / Target 2025</strong>
                <ul style={{ margin: 8, marginLeft: 18 }}>
                  <li>MS‑102: Microsoft 365 Administrator</li>
                  <li>MD‑102: Endpoint Administrator</li>
                  <li>ITIL v4 Foundation</li>
                  <li>Fortinet NSE 1–3</li>
                  <li>Microsoft SharePoint Associate</li>
                </ul>
              </div> */}
            </div>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Professional Experience</h2>
            <div style={{ display: "grid", gap: 16 }}>
              <div>
                <p style={{ margin: 0 }}>
                  <strong>Information Technology Support Technician</strong> |
                  Innobiz DUT Centre for Entrepreneurship & Innovation
                </p>
                <p style={{ margin: "4px 0 8px 0", color: "#475569" }}>
                  Mar 2022 – Jun 2024
                </p>
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                  <li>
                    Assisted students and staff face‑to‑face and over the phone
                    to set up systems and resolve incidents end‑to‑end.
                  </li>
                  <li>
                    Installed and configured software on stand‑alone computers
                    and laptops; supported data migration tasks.
                  </li>
                  <li>
                    Supported Microsoft 365 onboarding (Outlook, Teams, OneDrive
                    basics) for new users; assisted with email/data migration
                    tasks.
                  </li>
                  <li>
                    Logged and resolved incidents via a ticketing system,
                    working within agreed timeframes/SLAs and escalating where
                    appropriate.
                  </li>
                  <li>
                    Provided remote support using screen‑sharing/RDP tools and
                    on‑site support for classrooms and labs.
                  </li>
                  <li>
                    Documented fixes and standard procedures to speed up future
                    triage and user self‑help.
                  </li>
                  <li>
                    Collaborated with cross‑functional teams to coordinate
                    software updates and patches within agreed windows.
                  </li>
                </ul>
              </div>
              <div>
                <p style={{ margin: 0 }}>
                  <strong>Internet of Things (IoT) Facilitator</strong> | Mobile
                  Application Laboratory (mLab)
                </p>
                <p style={{ margin: "4px 0 8px 0", color: "#475569" }}>
                  Oct 2024 – Apr 2025
                </p>
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                  <li>
                    Guided learners step‑by‑step (in person and remotely)
                    through device setup, Arduino interfacing and sensor
                    configuration.
                  </li>
                  <li>
                    Followed build diagrams and written instructions to assemble
                    prototypes and resolve lab‑related faults.
                  </li>
                  <li>
                    Developed and delivered practical workshops; monitored
                    progress and provided individual technical feedback.
                  </li>
                  <li>
                    Created troubleshooting runbooks and how‑to guides that
                    reduced repetitive queries from learners.
                  </li>
                  <li>
                    Researched emerging IoT technologies and contributed to
                    improvements in lab environments and documentation.
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Projects & Extracurricular</h2>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
              <li>
                <strong>Link Vault (React + TypeScript)</strong> — Local link
                manager with tagging, search, and LocalStorage persistence.
                Repo:{" "}
                <a
                  href="https://github.com/juniorSarh/React-ts-link-vault"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/juniorSarh/React-ts-link-vault
                </a>
              </li>
              <li>
                <strong>
                  Job Application Tracker (React + TS + JSON Server)
                </strong>{" "}
                — CRUD app with auth, protected routes, URL‑driven
                search/filter/sort; deployed with Render (API/front‑end). Repo:{" "}
                <a
                  href="https://github.com/juniorSarh/React-Job-Application-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/juniorSarh/React-Job-Application-Tracker
                </a>
              </li>
              <li>
                <strong>React Weather App</strong> — OpenWeatherMap API:
                current, hourly, weekly forecasts; geolocation, saved locations,
                unit/theme toggles, offline cache. Repo:{" "}
                <a
                  href="https://github.com/juniorSarh/weather-application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/juniorSarh/weather-application
                </a>
              </li>
              <li>
                <strong>ShoppingList‑API (Node + TypeScript)</strong> — Simple
                REST API with in‑memory store; CRUD endpoints and consistent
                error model. Repo:{" "}
                <a
                  href="https://github.com/juniorSarh/ShoppingList-API"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/juniorSarh/ShoppingList-API
                </a>
              </li>
              <li>
                <strong>
                  Async Weather & News Dashboard (TypeScript/Node)
                </strong>{" "}
                — showcases callbacks → Promises → async/await patterns. Repo:{" "}
                <a
                  href="https://github.com/juniorSarh/weather-news-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/juniorSarh/weather-news-dashboard
                </a>
              </li>
            </ul>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Education</h2>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
              <li>
                <strong>
                  Advanced Diploma in Information Technology (ICT)
                </strong>{" "}
                | Durban University of Technology — 2020
                <div style={{ color: "#475569" }}>
                  Key coursework: Applied Mathematics; Data Structures;
                  Platform‑Based Development; Software Development; Parallel &
                  Distributed Computing
                </div>
              </li>
              <li>
                <strong>
                  Diploma in Information & Communication Technology (App
                  Development)
                </strong>{" "}
                | Durban University of Technology — 2019
                <div style={{ color: "#475569" }}>
                  Key coursework: Application Development; Information Systems;
                  Mobile Computing; IT Project Management
                </div>
              </li>
              <li>
                <strong>Matric (Grade 12)</strong> | iNkosi Moses Zikahli High
                School — 2015
              </li>
            </ul>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>References</h2>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
              <li>
                Dr Harry Swatson — SEAD1 | 083 762 8221 |{" "}
                <a href="mailto:Swatsonhk@gmail.com">Swatsonhk@gmail.com</a>
              </li>
              <li>
                Ms Palesa Antony — mLab Ecosystem Manager/Lead | 076 135 1688 |{" "}
                <a href="mailto:Palesa@mlab.co.za">Palesa@mlab.co.za</a>
              </li>
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
