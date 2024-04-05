import styles from "./SideBar.module.css";
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Profile />
      <NavBar />
    </div>
  );
}

function Profile() {
  return (
    <div className={styles.profile}>
      <img src="./public/img-1.jpg" alt="Profile Picrute" />
      <h2>USER NAME</h2>
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
