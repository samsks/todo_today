import { Header } from "./components/Header";
import Cookies from "js-cookie";

import "./global.css";
import styles from "./App.module.css";
import { TaskBar } from "./components/TaskBar";
import { TaskBox } from "./components/TaskBox";
import { useEffect, useState } from "react";

export interface iTask {
  id: number;
  title: string;
  isComplete: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<iTask[]>([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      const storedTaskList = Cookies.get("taskList");
      if (storedTaskList) {
        setTaskList(JSON.parse(storedTaskList));
      }
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

  useEffect(() => {
    if (!isFirstRender) {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);

      Cookies.set("taskList", JSON.stringify(taskList), {
        expires: expirationDate,
      });
    }
  }, [taskList, isFirstRender]);

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
