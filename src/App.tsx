import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.bodyTasks}></main>
    </div>
  );
}

export default App;
