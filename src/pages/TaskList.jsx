import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);
  console.log(tasks);

  return (
    <div>
      <h1>task list</h1>
      <table>
        <thead>
          <th>Nome</th>
          <th>Status</th>
          <th>Data di creazione</th>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
