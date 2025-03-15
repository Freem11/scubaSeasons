import { useMediaQuery } from "react-responsive";
import Logo from "./logo";
import styles from "./navbar.module.css";
import "../App.css";

export default function Navbar() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });

  return (
    <header className={styles.navbar}>
      <Logo />

      {isDesktop && (
        <nav className={styles.navbarLinks}>
          <a href="https://scubaseasons.netlify.app">
            <button className="button button-outline button-small">
              Log in
            </button>
          </a>
          <a href="https://scubaseasons.netlify.app">
            <button className="button button-primary button-small">
              Join now
            </button>
          </a>
        </nav>
      )}
    </header>
  );
}
