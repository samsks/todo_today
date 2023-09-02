import { useState } from "react";
import { iTask } from "../App";
import styles from "./TaskCard.module.css";

import { HiOutlineTrash } from "react-icons/hi";

interface TaskCardProps {
  task: iTask;
  setTaskList: React.Dispatch<React.SetStateAction<iTask[]>>;
}

export function TaskCard({ task, setTaskList }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleCheckBoxChange = () => {
    setTaskList((stateTaskList) =>
      stateTaskList.map((stateTask) =>
        stateTask.id === task.id
          ? { ...stateTask, isComplete: !stateTask.isComplete }
          : stateTask
      )
    );
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handleTitleClick = () => {
    setEditedTitle(task.title);
    setIsEditing(true);
  };

  const handleTitleBlur = () => {
    setTaskList((stateTaskList) =>
      stateTaskList.map((stateTask) =>
        stateTask.id === task.id
          ? { ...stateTask, title: editedTitle }
          : stateTask
      )
    );
    setIsEditing(false);
    console.log("editedTitle:", editedTitle);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      handleTitleBlur();
    }
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

      {isEditing ? (
        <input
          type="text"
          className={styles.editableInput}
          value={editedTitle}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <p onClick={handleTitleClick}>{task.title}</p>
      )}
      <div onClick={handleDeleteTask}>
        <HiOutlineTrash className={styles.trashButton} />
      </div>
    </div>
  );
}
