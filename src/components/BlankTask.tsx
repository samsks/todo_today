import styles from "./BlankTask.module.css";
import listTask from "../assets/Clipboard.svg";

export function BlankTask() {
  return (
    <section className={styles.blankTask}>
      <img src={listTask} />
      <p>
        <span>Você ainda não tem tarefas cadastradas</span>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </section>
  );
}
