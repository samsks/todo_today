import { Container } from "./Container";
import styles from "./TaskBar.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { iTask } from "../App";

interface TaskBarProps {
  taskList: iTask[];
  setTaskList: React.Dispatch<React.SetStateAction<iTask[]>>;
}

export function TaskBar({ taskList, setTaskList }: TaskBarProps) {
  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget[0] as HTMLInputElement;

    setTaskList([
      ...taskList,
      {
        id: taskList[taskList.length - 1]?.id + 1 || 1,
        title: input.value,
        isComplete: false,
      },
    ]);

    input.value = "";
  }

  return (
    <Container>
      <form onSubmit={handleCreateNewTask} className={styles.taskBar}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <AiOutlinePlusCircle />
        </button>
      </form>
    </Container>
  );
}
