import { iTask } from "../App";
import styles from "./TaskCard.module.css";

import { HiOutlineTrash } from "react-icons/hi";

interface TaskCardProps {
  task: iTask;
  setTaskList: React.Dispatch<React.SetStateAction<iTask[]>>;
}

export function TaskCard({ task, setTaskList }: TaskCardProps) {
  const handleCheckBoxChange = () => {
    setTaskList((stateTaskList) =>
      stateTaskList.map((stateTask) =>
        stateTask.id === task.id
          ? { ...stateTask, isComplete: !stateTask.isComplete }
          : stateTask
      )
    );
  };

  const handleDeleteTask = () => {
    setTaskList((stateTaskList) =>
      stateTaskList.filter((stateTask) => stateTask.id !== task.id)
    );
  };

  return (
    <div
      className={[styles.taskCard, task.isComplete && styles.checkText]
        .filter((className) => !!className)
        .join(" ")}
    >
      <label className={styles.checkContainer}>
        <input
          type="checkbox"
          checked={task.isComplete}
          onChange={handleCheckBoxChange}
        />
        <span className={styles.checkmark}></span>
      </label>

      <p>{task.title}</p>
      <div onClick={handleDeleteTask}>
        <HiOutlineTrash className={styles.trashButton} />
      </div>
    </div>
  );
}
