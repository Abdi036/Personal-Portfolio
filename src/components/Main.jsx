import styles from "./Main.module.css";

const skills = [
  {
    skillName: "HTML",
    experience: 90,
  },
  {
    skillName: "CSS",
    experience: 80,
  },
  {
    skillName: "Javascript",
    experience: 75,
  },
  {
    skillName: "React",
    experience: 70,
  },
];
export default function Main() {
  return (
    <div className={styles.main}>
      <Welcome />
      <AboutMe />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Welcome() {
  return (
    <section className={styles.welcome}>
      <h3>Welcome</h3>
      <h2>
        Hi, I'm Abdi Kumela <br />A Front_End Web Developer
      </h2>
      <h4>Based in Adama, Ethiopia.</h4>
      <button>Let's Talk</button>
    </section>
  );
}

function AboutMe() {
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
      {skills.map((skill) => (
        <div className={styles.skillContainer}>
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

function Service() {
  return (
    <section className={styles.servicesSection}>
      <h1>Services</h1>
      <div className={styles.services}>
        <div className={styles.service}>
          <h2>Web Design</h2>
          <p>
            Lisque persius interesset his et, in quot quidam persequeris vim, ad
            mea essent possim iriure.
          </p>
        </div>
        <div className={styles.service}>
          <h2>UI/UX Design</h2>
          <p>
            Lisque persius interesset his et, in quot quidam persequeris vim, ad
            mea essent possim iriure.
          </p>
        </div>
        <div className={styles.service}>
          <h2>App Design & Develop</h2>
          <p>
            Lisque persius interesset his et, in quot quidam persequeris vim, ad
            mea essent possim iriure.
          </p>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <h1>Portfolio</h1>
      <h2>My Work</h2>
      <div className={styles.filters}>
        <button>All</button>
        <button>Design</button>
        <button>Brand</button>
        <button>Photos</button>
      </div>
      <div className={styles.projects}>
        <div className={styles.project}>
          <h3>Project Title</h3>
          <p>Category</p>
        </div>
        <div className={styles.project}>
          <h3>Project Title</h3>
          <p>Category</p>
        </div>
        <div className={styles.project}>
          <h3>Project Title</h3>
          <p>Category</p>
        </div>
        <div className={styles.project}>
          <h3>Project Title</h3>
          <p>Category</p>
        </div>
        <div className={styles.project}>
          <h3>Project Title</h3>
          <p>Category</p>
        </div>
        <div className={styles.project}>
          <h3>Project Title</h3>
          <p>Category</p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <>
      <h1>Testimonial</h1>
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialBox}>
          <i className="fas fa-quote-left quote"></i>
          <p className={styles.testimonialText}>
            Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
            elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
            repellendus repudiandae deleniti ideas fuga molestiae, alias.
          </p>
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialInfo}>
              <div className={styles.testimonialName}>Alex Smith</div>
              <div className={styles.testimonialJob}>Designer | Developer</div>
              <div className={styles.testimonialStars}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className={styles.testimonialImage}>
              <img src="./public/img-1.jpg" alt="ProfilePic" />
            </div>
          </div>
        </div>
        <div className={styles.testimonialBox}>
          <i className="fas fa-quote-left quote"></i>
          <p className={styles.testimonialText}>
            Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
            elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
            repellendus repudiandae deleniti ideas fuga molestiae, alias.
          </p>
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialInfo}>
              <div className={styles.testimonialName}>Alex Smith</div>
              <div className={styles.testimonialJob}>Designer | Developer</div>
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
        <div className={styles.testimonialBox}>
          <i className="fas fa-quote-left quote"></i>
          <p className={styles.testimonialText}>
            Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
            elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
            repellendus repudiandae deleniti ideas fuga molestiae, alias.
          </p>
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialInfo}>
              <div className={styles.testimonialName}>Alex Smith</div>
              <div className={styles.testimonialJob}>Designer | Developer</div>
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
      </section>
    </>
  );
}

function Contact() {
  return (
    <section className={styles.contact}>
      <h1>Contact</h1>
      <div className={styles.contactWraper}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
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
            <h3>CONTACT</h3>
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

function Footer() {
  return (
    <footer className={styles.footer}>
      Copyright © 2024 Abdi. All Rights Reserved.
    </footer>
  );
}
