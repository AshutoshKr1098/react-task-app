import React, { Component } from 'react';
import ShowTodo from './ShowTodo';
import CreateTodo from './CreateTodo';
import ManualTodo from './ManualTodo';
import '../asset/Todo.css'
class Todo extends Component {
    state = {
        list: [],
        id: 0
    }
    onFormSubmit = (todo) => {
        const tempObj = { id: this.state.id+1, todos:todo};
        this.setState({ list: [...this.state.list,tempObj ],id:this.state.id+1});
    }
    onTaskDelete = (id) => {
        const finalList = this.state.list.filter((item) => item.id !== id);
        this.setState({ list: finalList });
    }
    render() { 
        return ( 
            <>
                <ManualTodo />
                <CreateTodo onSubmit={this.onFormSubmit} />
                {this.state.list.map(todo => {                    
                    return <ShowTodo onDelete={this.onTaskDelete} id={todo.id} text={todo.todos}/>
                })}
            </>            
        );
    }
}
 
export default Todo;