import styles from "./Main.module.css";

import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";
import { Service } from "./Service";
import { Testimonials } from "./Testimonials";
import { Welcome } from "./Welcome";

export const clients = ["Reobsen", "segni", "Sami", "Abdi"];
export const skills = [
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
export const services = [
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

export const myWorks = [
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
