import { NavLink } from "react-router-dom";
import styles from "../module.css/Navbar.module.css"


type NavbarProps = {
  appName?: string;
};

export default function Navbar({ appName = "Sabelo Gumede Portfolio" }: NavbarProps) {
  return (
    <header className={styles.navbar}>
      <NavLink to="/" className={styles.brand} aria-label={`${appName} home`}>
        {/* Inline SVG icon (no asset pipeline needed) */}
       {/* <img src={appIcon} alt="logo" className={styles.logo}/> */}
        <span className={styles.appName}>{appName}</span>
      </NavLink>

      <nav className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          Contact
        </NavLink>
      </nav>

      <div className={styles.actions}>
        <a
          href="https://www.linkedin.com/in/sabelogumede/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className={styles.iconButton}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.12 1 2.5 1 4.98 2.1 4.98 3.5zM0 8h5v16H0zM9 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.6c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4v7.8H9z" fill="currentColor" />
          </svg>
        </a>
        <a
          href="/Sabelo_Gumede_CV.pdf"
          download
          className={styles.cta}
          aria-label="Download CV"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}