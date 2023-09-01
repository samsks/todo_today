import { iTask } from "../App";
import styles from "./SummaryTask.module.css";

export function SummaryTask({ taskList }: { taskList: iTask[] }) {
  const numTaskCompleted = taskList.reduce(
    (acc, task) => (acc += task.isComplete ? 1 : 0),
    0
  );

  return (
    <section className={styles.summaryTask}>
      <div className={styles.summaryLabels}>
        <h4 className={styles.created}>Tarefas criadas</h4>
        <span>{taskList.length}</span>
      </div>
      <div className={styles.summaryLabels}>
        <h4 className={styles.finalized}>Concluídas</h4>
        <span>{`${numTaskCompleted} de ${taskList.length}`}</span>
      </div>
    </section>
  );
}
