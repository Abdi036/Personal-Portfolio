import styles from "./Main.module.css";
const clients = ["Reobsen", "segni", "Sami", "Abdi"];

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

// SERVICES
const services = [
  {
    service: "UI/UX Web Designing",
    icon: "fa-solid fa-pen-ruler",
    description:
      "As a UI/UX Designer, my focus is on understanding users' needs and crafting intuitive experiences that enhance usability and satisfaction. I combine my knowledge of design principles, user research, and industry best practices to create wireframes, prototypes, and visual designs that effectively communicate the brand's message and guide users through seamless interactions. By considering aspects such as information architecture, visual hierarchy, and user flows, I aim to optimize the overall user experience and create interfaces that are both aesthetically pleasing and highly functional.",
  },
  {
    service: "Web developement",
    icon: "fa-solid fa-desktop",
    description:
      " I am proficient in front-end development, implementing user interfaces and responsive designs that ensure optimal user experiences across various devices. Additionally, I have expertise in back-end development, enabling me to handle server-side logic, database management, and API integrations.",
  },
  {
    service: "App Designinig",
    icon: "fa-solid fa-mobile",
    description:
      "As an App Designer, I combine my knowledge of user experience (UX) principles, user research, and industry trends to craft engaging and seamless app experiences. I pay attention to details such as information architecture, navigation patterns, and visual hierarchy to create intuitive user flows that guide users through the app effortlessly. By focusing on usability and aesthetics, I aim to create visually stunning designs that not only captivate users but also enhance their overall satisfaction and engagement with the app.",
  },
  {
    service: "App Developement",
    icon: "fa-brands fa-android",
    description:
      "I am proficient in implementing user interfaces, handling data management, integrating with backend systems, and ensuring optimal performance and security. With a focus on user experience (UX) and usability, I strive to create intuitive and engaging mobile apps that provide seamless functionality and an enjoyable experience for users.",
  },
];

const myWorks = [
  {
    title: "Bankist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore id adipisci dolorem, illo dicta necessitatibus tenetur quae consequuntur quasi odio",
    image: "./pexels-pixabay-50987.jpg",
  },
  {
    title: "Forkify-Food-Recipe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore id adipisci dolorem, illo dicta necessitatibus tenetur quae consequuntur quasi odio",
    image: "./pexels-ella-olsson-1640777.jpg",
  },
  {
    title: "WorldWise",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore id adipisci dolorem, illo dicta necessitatibus tenetur quae consequuntur quasi odio",
    image: "./pexels-kaichieh-chan-917510.jpg",
  },
  {
    title: "UsePopCorn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore id adipisci dolorem, illo dicta necessitatibus tenetur quae consequuntur quasi odio",
    image: "./pexels-donald-tong-109669.jpg",
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

// //////////////////////////////////////////////////////////////////

function Welcome() {
  return (
    <section className={styles.welcome}>
      <h3>Welcome</h3>
      <h2>
        Hi, I'm Abdi Kumela <br />
        Front-End Web Developer
      </h2>
      <h4>Currently Based in Adama, Ethiopia.</h4>
      <button className={styles.contactBtn}>Let's Talk</button>
    </section>
  );
}

// ///////////////////////////////////////////////////////////////////////
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

// //////////////////////////////////////////////////////////////////////

function Service() {
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
// //////////////////////////////////////////////////////////////

function Portfolio() {
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

function Testimonials() {
  return (
    <section className={styles.testimonialSection}>
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
