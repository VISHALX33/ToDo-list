import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() , isDone:false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() , isDone:false  }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));

    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                };
            })
        ));

    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id ){
                return {
                    ...todo,
                   isDone: true,
                };
                    } else {
                        return todo;
                       }
                })
            ));
    }


    return (
        
        <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg m-44">
    <input 
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
        className="w-full p-2 border border-gray-300 rounded mb-4"
    />
    <button 
        onClick={addNewTask}
        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-blue-600"
    >
        Add Task
    </button>

    <hr className="my-4" />
    <h4 className="text-xl font-semibold mb-2">ToDo list</h4>

    <ul className="space-y-2">
        {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center">
                <span 
                    className={todo.isDone ? "line-through" : ""}
                >
                    {todo.task}
                </span>
                <div className="space-x-2">
                    <button 
                        onClick={() => deleteTodo(todo.id)} 
                        className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                    <button 
                        onClick={() => markAsDone(todo.id)} 
                        className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
                    >
                        Mark As Done
                    </button>
                </div>
            </li>
        ))}
    </ul>

    <button 
        onClick={upperCaseAll}
        className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
    >
        Mark All As Done
    </button>
</div>

    );
}