import { useRef,useContext } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todo-context";

const NewTodo:React.FC = () =>{
    const todosCtx = useContext(TodosContext);

    const inputText = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();

        const enteredText = inputText.current!.value;

        if(enteredText.trim().length === 0) return;

        todosCtx.addTodo(enteredText);

    }

    return(
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={inputText}></input>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;