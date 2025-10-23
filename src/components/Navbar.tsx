import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "../module.css/Navbar.module.css"


type NavbarProps = {
  appName?: string;
};

export default function Navbar({ appName = "Sabelo Gumede" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);
  return (
    <header className={styles.navbar}>
      <NavLink to="/" className={styles.brand} aria-label={`${appName} home`}>
        {/* Inline SVG icon (no asset pipeline needed) */}
       {/* <img src={appIcon} alt="logo" className={styles.logo}/> */}
        <span className={styles.appName}>{appName}</span>
      </NavLink>

      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-controls="primary-navigation"
        aria-expanded={open}
        className={styles.menuButton}
        onClick={toggle}
      >
        <span className={styles.menuBar} />
        <span className={styles.menuBar} />
        <span className={styles.menuBar} />
      </button>

      <nav id="primary-navigation" className={`${styles.links} ${open ? styles.open : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
          onClick={close}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
          onClick={close}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
          onClick={close}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
          onClick={close}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}