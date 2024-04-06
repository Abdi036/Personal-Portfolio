import styles from "./Main.module.css";
import { skills } from "./Main";

// ///////////////////////////////////////////////////////////////////////
export function AboutMe() {
  return (
    <section className={styles.aboutme}>
      <h1>About Me</h1>
      <p>
        Hello! I'm Abdi Kumela, a passionate Front-End Web Developer dedicated
        to helping businesses establish a strong online presence. With my
        expertise, I can assist you in building a compelling brand for your
        business at an affordable price. I believe that a well-designed website
        is a powerful tool that can effectively communicate your brand's message
        and values to your target audience. By combining my technical skills
        with a keen eye for aesthetics, I strive to create visually appealing
        and user-friendly websites that leave a lasting impression. Whether
        you're a startup or an established company, I am committed to delivering
        high-quality web solutions tailored to your specific needs. Let's
        collaborate and bring your brand's vision to life!
      </p>
      <ProgressBar />
    </section>
  );
}

function ProgressBar() {
  return (
    <div>
      <h1>Skills</h1>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillContainer}>
          <span>
            <h3>{skill.skillName}</h3>
            <h3>{skill.experience}%</h3>
          </span>
          <div className={styles.progress}>
            <span
              style={{
                background: "#0cc87c",
                width: `${skill.experience}%`,
                height: "8px",
                borderRadius: "15px",
              }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
}
