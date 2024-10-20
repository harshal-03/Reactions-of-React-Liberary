import React from "react";

const TodoItem = ()=>{
    return (
        <div>
            <li className="todo-item">
                <span>
                    <input type="checkbox" />
                    <span className="todo-item-text">Eat</span>
                </span>
                <p>...</p>
            </li>
            <li className="todo-item">
                <span>
                    <input type="checkbox" />
                    <span className="todo-item-text">Code</span>
                </span>
                <p>...</p>
            </li>
            <li className="todo-item">
                <span>
                    <input type="checkbox" />
                    <span className="todo-item-text">Sleep</span>
                </span>
                <p>...</p>
            </li>
            <li className="todo-item">
                <span>
                    <input type="checkbox" />
                    <span className="todo-item-text">Repeat</span>
                </span>
                <p>...</p>
            </li>
        </div>
        
    );
}

export default TodoItem;