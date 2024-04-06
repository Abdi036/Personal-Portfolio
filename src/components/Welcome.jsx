import styles from "./Welcome.module.css";

export function Welcome() {
  return (
    <section className={styles.welcome}>
      <h2>
        Hi, I'm Abdi Kumela <br />
        Front-End Web Developer
      </h2>
      <h4>Currently Based in Adama, Ethiopia.</h4>
      <button className={styles.contactBtn}>Let's Talk</button>
    </section>
  );
}
