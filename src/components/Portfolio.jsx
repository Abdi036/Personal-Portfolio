import styles from './Portfolio.module.css'
import { myWorks } from "./Main";

// //////////////////////////////////////////////////////////////
export function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <h1>Portfolio</h1>
      <h2>My Works</h2>
      <div className={styles.projects}>
        {myWorks.map((work, index) => (
          <div
            className={styles.project}
            key={index}
            style={{
              backgroundImage: `url(${work.image})`,
              backgroundSize: "cover",
            }}
          >
            <h3>{work.title}</h3>
            <i className="fa-solid fa-link"></i>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
