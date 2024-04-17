import styles from "./Testimonial.module.css";
import { clients } from "./Main";

export function Testimonials() {
  return (
    <section className={styles.testimonialSection} id="testimonial">
      <h1>Testimonial</h1>
      <div className={styles.clientsContainer}>
        {clients.map((client, index) => (
          <div key={index} className={styles.testimonialBox}>
            <i className="fas fa-quote-left quote"></i>
            <p className={styles.testimonialText}>
              Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
              elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
              repellendus repudiandae deleniti ideas fuga molestiae, alias.
            </p>
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialInfo}>
                <div className={styles.testimonialName}>{client}</div>
                <div className={styles.testimonialJob}>
                  Designer | Developer
                </div>
                <div className={styles.testimonialStars}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className={styles.testimonialImage}>
                <img src="/img-1.jpg" alt="ProfilePic" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
