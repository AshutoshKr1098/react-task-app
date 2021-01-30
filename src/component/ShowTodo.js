const ShowTodo = (props) => {
    const onDeleteTodo = (key) => {
        // console.log(key);
        props.onDelete(key);
    }
    return (
        <div className="ShowTodo">
            <p>{props.text}</p>
            <i className ="trash icon" onClick={()=>onDeleteTodo(props.id)}></i>
        </div>
    );
}

export default ShowTodo;