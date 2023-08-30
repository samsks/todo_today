import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";
import { TaskBar } from "./components/TaskBar";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.bodyTasks}>
        <TaskBar />
      </main>
    </div>
  );
}

export default App;
