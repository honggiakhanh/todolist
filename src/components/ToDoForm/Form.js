import './Form.css';
import { useState } from 'react';

function ToDoForm(props) {
  const [title, setTitle] = useState('');

  const onChangeHandler = event => {
    setTitle(event.target.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    props.onAddData(title);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type='text' value={title} onChange={onChangeHandler} />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default ToDoForm;
