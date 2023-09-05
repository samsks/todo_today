import { Header } from "./components/Header";
import Cookies from "js-cookie";

import "./global.css";
import styles from "./App.module.css";
import { TaskBar } from "./components/TaskBar";
import { TaskBox } from "./components/TaskBox";
import { useEffect, useState } from "react";
import { FeedbackModal } from "./components/modals/FeedbackModal";

export interface iTask {
  id: number;
  title: string;
  isComplete: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<iTask[]>([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [linksClicked, setLinksClicked] = useState({
    github: false,
    linkedin: false,
  });
  const [isOpenProjectModal, setIsOpenProjectModal] = useState(false);

  useEffect(() => {
    const modalTimer = setTimeout(
      () => {
        setIsOpenProjectModal(true);
      },
      Number(Cookies.get("modalReminder")) || 30000
    );
    return () => clearTimeout(modalTimer);
  }, []);

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
    <div className={styles.main}>
      <Header />
      <main className={styles.bodyTasks}>
        <TaskBar taskList={taskList} setTaskList={setTaskList} />
        <TaskBox taskList={taskList} setTaskList={setTaskList} />
      </main>
      {isOpenProjectModal && (
        <FeedbackModal
          setIsOpenProjectModal={setIsOpenProjectModal}
          linksClicked={linksClicked}
          setLinksClicked={setLinksClicked}
        />
      )}
    </div>
  );
}

export default App;
