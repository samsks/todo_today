import styles from "./Header.module.css";

import rocketIcon from "../assets/layer_rocket.svg";
import { Container } from "./Container";

export function Header() {
  return (
    <header>
      <Container className={styles.header}>
        <img src={rocketIcon} alt="rocket icon" />
        <div>
          <strong>to</strong>
          <strong>do</strong>
        </div>
      </Container>
    </header>
  );
}
