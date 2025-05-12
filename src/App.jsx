import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

//-----PAGES-----//
import AddTask from "./pages/AddTask"
import TaskList from "./pages/TaskList"

//-----CONTEXT-----//
import { GlobalProvider } from "./context/GlobalContext"

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Lista task</NavLink>
          <NavLink to="add">Aggiungi task</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<TaskList/>}/>
          <Route path="/add" element={<AddTask/>}/>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
