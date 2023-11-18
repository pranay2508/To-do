import { FormEvent, useState } from "react"


const AddtoDo = () => {
    const [todo , setTodo]=useState("");
    const handleFormSubmit =(e:FormEvent<HTMLElement> )=>{
        e.preventDefault();
        handleAddToDo(todo)
        setTodo("")
    }
    
  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)}/>
        <button type="submit">Add</button>

    </form>
  )
}

export default AddtoDo