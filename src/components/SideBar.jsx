import { useState } from "react";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Profile />
      <NavBar />
      <SocialMedias />
    </div>
  );
}

function Profile() {
  return (
    <div className={styles.profile}>
      <img src="./img-1.jpg" alt="Profile Picrute" />
      <h3>Abdi Kumela</h3>
    </div>
  );
}

function NavBar() {
  const [activeLink, setActiveLink] = useState("");

  function handleNavLinkClick(link) {
    setActiveLink(link);
  }

  return (
    <nav className={styles.navbar}>
      <ul>
        <a
          href="#home"
          className={`${activeLink === "#home" ? styles.active : ""}`}
          onClick={() => handleNavLinkClick("#home")}
        >
          <li>Home</li>
        </a>

        <a
          href="#about_me"
          className={`${activeLink === "#about_me" ? styles.active : ""}`}
          onClick={() => handleNavLinkClick("#about_me")}
        >
          <li>About Me</li>
        </a>
        <a
          href="#service"
          className={`${activeLink === "#service" ? styles.active : ""}`}
          onClick={() => handleNavLinkClick("#service")}
        >
          <li>Service</li>
        </a>
        <a
          href="#portfolio"
          className={`${activeLink === "#portfolio" ? styles.active : ""}`}
          onClick={() => handleNavLinkClick("#portfolio")}
        >
          <li>Portfolio</li>
        </a>
        <a
          href="#testimonial"
          className={`${activeLink === "#testimonial" ? styles.active : ""}`}
          onClick={() => handleNavLinkClick("#testimonial")}
        >
          <li>Testimonial</li>
        </a>
        <a
          href="#contact"
          className={`${activeLink === "#contact" ? styles.active : ""}`}
          onClick={() => handleNavLinkClick("#contact")}
        >
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
}

function SocialMedias() {
  function handleClickLink(url) {
    window.open(url, "_blank");
  }

  return (
    <div className={styles.socialMedia}>
      <i
        className="fa-brands fa-github"
        onClick={() => handleClickLink("https://github.com")}
      ></i>
      <i
        className="fa-brands fa-linkedin"
        onClick={() => handleClickLink("https://linkedin.com")}
      ></i>
      <i
        className="fa-brands fa-telegram"
        onClick={() => handleClickLink("https://telegram.org")}
      ></i>
      <i
        className="fa-brands fa-square-x-twitter"
        onClick={() => handleClickLink("https://twitter.com")}
      ></i>
      <i
        className="fa-brands fa-instagram"
        onClick={() => handleClickLink("https://instagram.com")}
      ></i>
    </div>
  );
}
