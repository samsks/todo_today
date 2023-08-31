import styles from "./TaskCard.module.css";

import { HiOutlineTrash } from "react-icons/hi";

export function TaskCard() {
  return (
    <div
      className={[styles.taskCard, styles.checkText]
        .filter((className) => !!className)
        .join(" ")}
    >
      <label className={styles.checkContainer}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>

      <p>
        Teste de tarefa sdad asd hfgh af fergrece cercer vtvbec verecrv
        ecervtrbe crece cercxew sdfsta ffnrebvc dfw safasd asdas asdasdas
        asdasdasd asdasd asdasd fsdfd sdfasdf sadfsad fgasdfsdfsdf dfsdfsd
      </p>
      <div>
        <HiOutlineTrash className={styles.trashButton} />
      </div>
    </div>
  );
}
