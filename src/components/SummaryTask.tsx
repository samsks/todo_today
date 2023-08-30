import styles from "./SummaryTask.module.css";

export function SummaryTask() {
  return (
    <section className={styles.summaryTask}>
      <div className={styles.summaryLabels}>
        <h4 className={styles.created}>Tarefas criadas</h4>
        <span>0</span>
      </div>
      <div className={styles.summaryLabels}>
        <h4 className={styles.finalized}>Concluídas</h4>
        <span>2 de 5</span>
      </div>
    </section>
  );
}
