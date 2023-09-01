import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";
import { TaskBar } from "./components/TaskBar";
import { TaskBox } from "./components/TaskBox";
import { useState } from "react";

export interface iTask {
  id: number;
  title: string;
  isComplete: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<iTask[]>([]);

  return (
    <div>
      <Header />
      <main className={styles.bodyTasks}>
        <TaskBar taskList={taskList} setTaskList={setTaskList} />
        <TaskBox taskList={taskList} setTaskList={setTaskList} />
      </main>
    </div>
  );
}

export default App;
