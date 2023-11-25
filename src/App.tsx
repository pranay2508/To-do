import AddtoDo from "./components/addtodo"
import Todos from "./components/todos"
import Navbar from "./components/navbar"
import "./App.css"
const App = () => {
  return (
    <main>
      <h1>
        TODO REACT + TYPESCRIPT 
        
      </h1>
      <Navbar/>
      < AddtoDo/>
      <Todos/>
    </main>
  )
}

export default App