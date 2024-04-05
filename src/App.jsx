import styles from "./App.module.css";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

export default function App() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Main />
    </div>
  );
}
