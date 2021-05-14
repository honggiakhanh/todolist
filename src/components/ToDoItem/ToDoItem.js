import './ToDoItem.css';

function ToDoItem(props) {
  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className='todo__item'>
      <div className='todo__title'>{props.title}</div>
      <button onClick={onDeleteHandler}>Delete</button>
    </div>
  );
}

export default ToDoItem;
