import { useState } from 'react';

const CreateTodo = (props) => {
    const [todo, setTodo] = useState('');
    const onFormSubmit = (e) => {
        e.preventDefault(); 
        const form = document.querySelector('form');
        form.reset();
        if(todo.length>0)
            props.onSubmit(todo);
    }
    const onInputChange = (e) => {
        setTodo(e.target.value);
    }
    return (
        <div className="CreateTodo">
            <form onSubmit={onFormSubmit}>                
                <input onChange={onInputChange} type="text" placeholder="Enter here" />
                <button onClick={(e)=>onFormSubmit(e)}>Create</button>
            </form>
        </div>
    );
}

export default CreateTodo;