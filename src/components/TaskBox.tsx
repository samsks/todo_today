import { iTask } from "../App";
import { BlankTask } from "./BlankTask";
import { Container } from "./Container";
import { SummaryTask } from "./SummaryTask";
import styles from "./TaskBox.module.css";
import { TaskCard } from "./TaskCard";

interface TaskBoxProps {
  taskList: iTask[];
  setTaskList: React.Dispatch<React.SetStateAction<iTask[]>>;
}

export function TaskBox({ taskList, setTaskList }: TaskBoxProps) {
  const incompleteTasks = taskList.filter((task) => !task.isComplete);
  const completeTasks = taskList.filter((task) => task.isComplete);

  return (
    <Container>
      <section className={styles.taskBox}>
        <SummaryTask taskList={taskList} />
        {taskList.length === 0 ? (
          <BlankTask />
        ) : (
          <section className={styles.taskList}>
            {incompleteTasks.map((task) => (
              <TaskCard key={task.id} task={task} setTaskList={setTaskList} />
            ))}
            {completeTasks.map((task) => (
              <TaskCard key={task.id} task={task} setTaskList={setTaskList} />
            ))}
          </section>
        )}
      </section>
    </Container>
  );
}
