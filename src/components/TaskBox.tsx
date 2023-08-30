import { Container } from "./Container";
import { SummaryTask } from "./SummaryTask";
import styles from "./TaskBox.module.css";

export function TaskBox() {
  return (
    <Container>
      <section className={styles.taskBox}>
        <SummaryTask />
      </section>
    </Container>
  );
}
