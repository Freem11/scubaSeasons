import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Logo from "../logo.tsx";
import styles from "./navbar.module.css";
import "../../App.css";

export default function Navbar() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });

  return (
    <header className={styles.navbar}>
      <Link to={"/"} className={styles.homeLink}>
        <Logo />
      </Link>

        <nav className={styles.navbarLinks}>
          {isDesktop && (
            <a href="https://scubaseasons.netlify.app" className="button button-primary button-small">
              {"Join now"}
            </a>
          )}
          <Link to={"/faq"} className="button button-outline button-small">
            {"FAQ"}
          </Link>
        </nav>
    </header>
  );
}
