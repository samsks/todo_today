import { Container } from "./Container";
import styles from "./TaskBar.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { iTask } from "../App";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface TaskBarProps {
  taskList: iTask[];
  setTaskList: React.Dispatch<React.SetStateAction<iTask[]>>;
}

export function TaskBar({ taskList, setTaskList }: TaskBarProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTaskText(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    setNewTaskText(e.target.value);
  }

  function handleCreateNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTaskList((stateTaskList) => [
      ...stateTaskList,
      {
        id: taskList[taskList.length - 1]?.id + 1 || 1,
        title: newTaskText,
        isComplete: false,
      },
    ]);

    setNewTaskText("");
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Não deixe o título em branco");
  }

  return (
    <Container>
      <form onSubmit={handleCreateNewTask} className={styles.taskBar}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onInput={handleNewTaskText}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit">
          Criar
          <AiOutlinePlusCircle />
        </button>
      </form>
    </Container>
  );
}
