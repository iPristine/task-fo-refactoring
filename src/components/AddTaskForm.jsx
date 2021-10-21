import React, {useState} from 'react';
import './../styles/Forma.css';
import {tasksStore} from "../store";

export const AddTaskForm = () => {
    const {addNewTask} = tasksStore;

    const [newTaskDescription, setNewTaskDescription] = useState('')

    const addTaskClick = () => {
        addNewTask(newTaskDescription);
        setNewTaskDescription('');
    }


    return (
        <div>
            <input
                value={newTaskDescription}

                onChange={(e) => {
                    setNewTaskDescription(e.target.value)
                }}
                type="text"
                placeholder="Введите задачу"
            />
            <button onClick={addTaskClick}>Добавить задачу</button>
        </div>
    );
}
