import ToDoItem from '../ToDoItem/ToDoItem';

function ToDoList(props) {
  return props.list.map(item => {
    return (
      <ToDoItem
        onDelete={props.onDelete}
        key={item.id}
        id={item.id}
        title={item.title}
      />
    );
  });
}
export default ToDoList;
