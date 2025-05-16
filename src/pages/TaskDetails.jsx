import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskDetails() {
  const { id } = useParams();
  const { tasks } = useContext(GlobalContext);

  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return <h2>Task non trovata</h2>;
  }

  const handleDelete = () => {
    console.log("Elimina task: ", task.id);
  };

  return (
    <div className="task-detail">
      <h1>DETTAGLIO DELLA TASK</h1>
      <p>
        <strong>Nome: </strong>
        {task.title}
      </p>
      <p>
        <strong>Descrizione: </strong>
        {task.description}
      </p>
      <p>
        <strong>Stato: </strong>
        {task.status}
      </p>
      <p>
        <strong>Data di creazione: </strong>
        {new Date(task.createdAt).toLocaleDateString()}
      </p>
      <button onClick={handleDelete}>Elimina</button>
    </div>
  );
}
