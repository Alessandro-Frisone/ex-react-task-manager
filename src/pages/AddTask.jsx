import { useState, useRef, useMemo, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

export default function AddTask() {
  const { addTask } = useContext(GlobalContext);

  const [taskTitle, setTaskTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();

  const taskTitleError = useMemo(() => {
    if (!taskTitle.trim()) return "Il nome della task non può essere vuoto";
    if ([...taskTitle].some((char) => symbols.includes(char)))
      return "Il nome della task non può contenere simboli";
    return "";
  }, [taskTitle]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (taskTitleError) return;

    const newTask = {
      title: taskTitle.trim(),
      description: descriptionRef.current.value,
      status: statusRef.current.value,
    };

    try {
      await addTask(newTask);
      alert("Task creata con successo");
      setTaskTitle("");
      (descriptionRef.current.value = ""), (statusRef.current.value = "");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="task-form">
      <h1>Aggiungi una task</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskTitle">Nome Task:</label>
          <input
            id="taskTitle"
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Inserisci il nome della task"
          />
          {taskTitleError && <p style={{ color: `red` }}>{taskTitleError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Descrizione:</label>
          <textarea
            id="description"
            ref={descriptionRef}
            placeholder="Scrivi una descrizione..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Stato:</label>
          <select ref={statusRef} defaultValue="To Do">
            {["To Do", "Doing", "Done"].map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" disabled={taskTitleError}>
          Aggiungi task
        </button>
      </form>
    </div>
  );
}
