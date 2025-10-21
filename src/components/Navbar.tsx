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
    </header>
  );
}