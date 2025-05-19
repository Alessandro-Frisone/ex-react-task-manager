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

    const addTask = async newTask => {
      const response = await fetch(`${VITE_API_URL}/tasks`, {
        method: `POST`,
        headers: {"content-type": "application/json"},
        body: JSON.stringify(newTask)
      })
      const { success, message, task } = await response.json()
      if(!success) throw new Error(message)

        SetTasks(prev => [...prev, task])
    }

    const removeTask = async taskId => {
      const response = await fetch(`${VITE_API_URL}/tasks/${taskId}`,{
         method: `DELETE`
      })
      const { success, message } = await response.json()
      if(!success) throw new Error(message)
        
        SetTasks(prev => prev.filter(t => t.id !== taskId))
    }

    const updateTask = async updateTask => {
      const response = await fetch(`${VITE_API_URL}/tasks/${updateTask.id}`, {
        method: `PUT`,
        headers: {"content-type": "application/json"},
        body: JSON.stringify(updateTask)
      })
      const { success, message, task: newTask } = await response.json()
      if(!success) throw new Error(message)

      SetTasks(prev => prev.map(oldTask => oldTask.id === newTask.id ? newTask : oldTask ))
    }
    

    return { tasks, addTask, removeTask, updateTask}
}
 