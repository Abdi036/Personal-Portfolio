import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h1>Contact</h1>
      <div className={styles.contactWraper}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="on"
              placeholder="Your name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="on"
              placeholder="Your email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>

        <div className={styles.addressContact}>
          <div className={styles.contactInfo}>
            <p>
              <i className={`fa-solid fa-phone ${styles.icons}`}></i>
              Phone: +251930605760
            </p>
            <p>
              <i className={`fa-regular fa-envelope  ${styles.icons}`}></i>
              Email: abdikumela036@gmail.com
            </p>
            <p>
              <i className={`fa-brands fa-telegram ${styles.icons}`}></i>
              Telegram : @Abdi036
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
