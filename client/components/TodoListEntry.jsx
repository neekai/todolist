import React from 'react';

var TodoListEntry = ({todo, deleteTodo}) => (
    <div>
        {todo}
        <button onClick={(index) => deleteTodo(index)}>YOU DID IT!</button>
    </div>
)

export default TodoListEntry;
