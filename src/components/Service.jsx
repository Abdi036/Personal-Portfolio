import styles from "./Service.module.css";
import { services } from "./Main";

// //////////////////////////////////////////////////////////////////////
export function Service() {
  return (
    <section className={styles.servicesSection}>
      <h1>Services</h1>
      <div className={styles.services}>
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.service}
            style={{ background: `${service.image}` }}
          >
            <h2>
              <i className={`${service.icon} ${styles.icons}`}></i>
              {service.service}
            </h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
