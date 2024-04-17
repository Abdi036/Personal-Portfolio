import styles from "./Welcome.module.css";
export function Welcome() {
  function handleContactButtonClick() {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section className={styles.welcome} id="home">
      <h2>
        Hi, I'm Abdi Kumela <br />
        Front-End Web Developer
      </h2>
      <h4>Currently Based in Adama, Ethiopia.</h4>
      <button className={styles.contactBtn} onClick={handleContactButtonClick}>
        Let's Talk
      </button>
    </section>
  );
}
