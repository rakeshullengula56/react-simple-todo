import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
        <div>
            <input
                onChange={handleOnChange}
                placeholder="Add a task"
                value={newTodo}
                type="text"
            />
            <br />
            <button onClick={addNewTask}>Add task</button>
            <br />
            <h3>Task List</h3>
            <ul>
                {todo.map((item) => (
                    <li key={item.id} style={{ textDecoration: item.isDone ? "line-through" : "none" }}>
                        <span>{item.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => updateTask(item.id)}>Mark as Done</button>
                        <button onClick={() => deleteTask(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={upperCaseAll}>Mark All as Done</button>
        </div>
    );
}

export default TodoList;
