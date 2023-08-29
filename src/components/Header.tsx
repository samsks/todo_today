import styles from "./Header.module.css";

import rocketIcon from "../assets/layer_rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketIcon} alt="rocket icon" />
      <div>
        <strong>to</strong>
        <strong>do</strong>
      </div>
    </header>
  );
}
