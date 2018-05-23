import React from 'react';
import axios from 'axios'
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

    componentDidMount() {
      this.fetchTodosFromDB();
    }

    fetchTodosFromDB() {
      axios.get('/api/todos')
      .then(data => {
          console.log('we got the data from fetchTodos..', data)
          console.log('here', [...data.data])
          const todosArr = [];
          data.data.forEach(function(todo){ todosArr.push(todo.todo)})
          this.setState({
              todos: todosArr
          }, () => {console.log('this.state.todos = ', this.state.todos)})
      })
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
        axios.post('/api/todos', {
            todo: this.state.todo
        })
        .then(function(response) {
            console.log('saved in todo', response);
        })
        .catch(function(error) {
            console.log('there is an error with saving..', error);
        });
    }

    deleteTodo(index) {
        const todos = this.state.todos;
        todos.splice(index, 1);
        this.setState({
            todos: todos
        });
    }

    render() {
        return (
            <div>
                <h1>MY TODO-LIST</h1>
                <form method="post" onSubmit = {(e) => this.handleSubmit(e)}>
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

