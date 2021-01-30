import React, { Component } from 'react';
import ShowTodo from './component/ShowTodo';
import CreateTodo from './component/CreateTodo';
import ManualTodo from './component/ManualTodo';
import './Todo.css'
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
                    console.log(todo);
                    return <ShowTodo onDelete={this.onTaskDelete} id={todo.id} text={todo.todos}/>
                })}
            </>            
        );
    }
}
 
export default Todo;