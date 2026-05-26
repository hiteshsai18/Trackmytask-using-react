import { useState } from "react";

function TodoForm({addTodo}) {
    const [input,setInput] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        addTodo(input);
        setInput("");
    };

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="one task per day keeps the laziness away"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />

            <button type="submit">Add Task</button>
        </form>
    );
}

export default TodoForm