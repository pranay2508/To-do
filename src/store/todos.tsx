/* eslint-disable react-refresh/only-export-components */
import {ReactNode, createContext, useState , useContext} from "react";


export type TodosProviderProps={
    children : ReactNode // children kuch bhi ho skta hai mtlb TYPE
}

export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}

export type TodosContext = {
    todos:Todo[],
    handleAddToDo:(task:string)=>void;
}
export const todosContext = createContext<TodosContext | null >(null)

export const TodosProvider = ({children}: TodosProviderProps)=>{


    const [todos , setTodos] = useState<Todo[]>([])
    const handleAddToDo =(task:string)=>{
        setTodos((prev)=>{
            const newTodos: Todo[]= [
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date()
                },
                ...prev
            ]
            console.log("my" + prev);
            console.log(newTodos);
            return newTodos
        })
    }



    return <todosContext.Provider value={{todos, handleAddToDo}}>
        {children}
    </todosContext.Provider>}


export const useTodos =()=>{
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer){
        throw new Error("useTodos used outside of provider");
    }
    return todosConsumer;
}