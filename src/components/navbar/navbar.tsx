import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Logo from "../logo.tsx";
import styles from "./navbar.module.css";
import "../../App.css";

export default function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.homeLink} onClick={closeMenu}>
        <Logo />
      </Link>

      {isMobile ? (
        <div className={styles.mobileMenuWrapper} ref={menuRef}>
          <button 
            type="button"
            className="button button-outline button-small"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>

          {isMenuOpen && (
            <div className={styles.dropdown}>
              <Link 
                to="/support" 
                className="button button-outline button-small"
                onClick={closeMenu}
              >
                Support
              </Link>

              <Link 
                to="/faq" 
                className="button button-outline button-small"
                onClick={closeMenu}
              >
                FAQ
              </Link>
            </div>
          )}
        </div>
      ) : (
        <nav className={styles.navbarLinks}>
          <Link to="/support" className="button button-outline button-small">
            Support
          </Link>

          <Link to="/faq" className="button button-outline button-small">
            FAQ
          </Link>
        </nav>
      )}
    </header>
  );
}