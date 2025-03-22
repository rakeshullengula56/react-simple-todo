import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'; // Import the CSS file

function TodoList() {
    let [todo, setTodo] = useState([{ id: uuidv4(), task: "Wake up at 7PM", isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let handleOnChange = (event) => {
        setNewTodo(event.target.value);
    };

    let addNewTask = () => {
        if (newTodo.trim() !== "") {
            setTodo((prevTodo) => [
                ...prevTodo,
                { id: uuidv4(), task: newTodo, isDone: false }
            ]);
            setNewTodo("");
        }
    };

    let deleteTask = (id) => {
        setTodo((prevTodo) => prevTodo.filter((task) => task.id !== id));
    };

    let upperCaseAll = () => {
        setTodo((prevTodo) =>
            prevTodo.map((item) => ({
                ...item,
                task: item.task.toUpperCase(),
                isDone: true
            }))
        );
    };

    let updateTask = (id) => {
        setTodo((prevTodo) =>
            prevTodo.map((item) =>
                item.id === id
                    ? { ...item, isDone: true }
                    : item
            )
        );
    };

    return (
        <div className="todo-container">
            <input
                onChange={handleOnChange}
                placeholder="Add a task"
                value={newTodo}
                type="text"
                className="todo-input"
            />
            <br />
            <button onClick={addNewTask} className="todo-button">Add Task</button>
            <br />
            <h3>Task List</h3>
            <ul className="todo-list">
                {todo.map((item) => (
                    <li key={item.id} className={`todo-item ${item.isDone ? 'done' : ''}`}>
                        <span>{item.task}</span>
                        {item.isDone && <span> ✅</span>}
                        <div className="todo-actions">
                            {!item.isDone && (
                                <button onClick={() => updateTask(item.id)} className="todo-button todo-done">
                                    Mark as Done
                                </button>
                            )}
                            <button onClick={() => deleteTask(item.id)} className="todo-button todo-delete">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={upperCaseAll} className="todo-button">Mark All as Done</button>
        </div>
    );
}

export default TodoList;

