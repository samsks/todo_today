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
  const renderTaskList = (tasks: iTask[], isComplete: boolean) => {
    const filteredTasks = [...tasks]
      .reverse()
      .filter((task) => task.isComplete === isComplete);

    return filteredTasks.map((task) => (
      <TaskCard key={task.id} task={task} setTaskList={setTaskList} />
    ));
  };

  return (
    <Container>
      <section className={styles.taskBox}>
        <SummaryTask taskList={taskList} />
        {taskList.length === 0 ? (
          <BlankTask />
        ) : (
          <section className={styles.taskList}>
            {renderTaskList(taskList, false)}
            {renderTaskList(taskList, true)}
          </section>
        )}
      </section>
    </Container>
  );
}
