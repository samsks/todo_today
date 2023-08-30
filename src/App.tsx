import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";
import { TaskBar } from "./components/TaskBar";
import { TaskBox } from "./components/TaskBox";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.bodyTasks}>
        <TaskBar />
        <TaskBox />
      </main>
    </div>
  );
}

export default App;
