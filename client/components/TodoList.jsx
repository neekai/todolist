import React from 'react';
import TodoListEntry from './TodoListEntry.jsx'; 

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: '',
            todos: [],
        }
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    handleInput(e) {
        this.setState({
            todo: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            todos: [...this.state.todos, this.state.todo]
        });
        e.target.reset();
    }

    deleteTodo(index) {
        const todos = this.state.todos;
        todos.splice(index, 1);
        this.setState({
            todos: todos
        })
    }

    render() {
        return (
            <div>
                <h1>MY TODO-LIST</h1>
                <form onSubmit = {(e) => this.handleSubmit(e)}>
                    Add Todo: <input onKeyUp={(e) => this.handleInput(e)} type="text"/>
                    <button>Submit!</button>
                </form>

                <br/>
                {this.state.todos.map((todo, index) => <TodoListEntry todo={todo} index={index} key={index} deleteTodo={this.deleteTodo}/>)}
            </div>
        )
    } 
}

export default TodoList;

