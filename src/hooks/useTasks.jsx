import { createContext, useState, useEffect } from "react";
const { VITE_API_URL } = import.meta.env


export default function useTasks(){
  const [ tasks, SetTasks] = useState([])

    useEffect(() => {
        fetch(`${VITE_API_URL}/tasks`)
        .then(res => res.json())
        .then(data => SetTasks(data))
        .catch(error => console.error(error))
    }, [])  

    const addTask = (newTask) => {

    }

    const removeTask = (taskId) => {

    }

    const updateTask = () => {

    }

    return { tasks, addTask, removeTask, updateTask}
}
 