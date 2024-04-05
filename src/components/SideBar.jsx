import styles from "./SideBar.module.css";
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Profile />
      <NavBar />
      <SocialMedias />
    </div>
  );
}

function Profile() {
  return (
    <div className={styles.profile}>
      <img src="./public/img-1.jpg" alt="Profile Picrute" />
      <h3>USER NAME</h3>
    </div>
  );
}

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Service</li>
        <li>Portfolio</li>
        <li>Testimonial</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function SocialMedias() {
  return (
    <div className={styles.socialMedia}>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
    </div>
  );
}
