import { createContext, useState, useEffect } from "react";
const { VITE_API_URL } = import.meta.env

export const GlobalContext = createContext()
export function GlobalProvider({children}){

    const [ tasks, SetTasks] = useState([])

    useEffect(() => {
        fetch(`${VITE_API_URL}/tasks`)
        .then(res => res.json())
        .then(data => SetTasks(data))
        .catch(error => console.error(error))
    }, [])


    return(
        <GlobalContext.provider value={{tasks, SetTasks}}>
            {children}
        </GlobalContext.provider>
    )
}