import { Container } from "./Container";
import styles from "./TaskBar.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

export function TaskBar() {
  return (
    <Container>
      <form className={styles.taskBar}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <AiOutlinePlusCircle />
        </button>
      </form>
    </Container>
  );
}
