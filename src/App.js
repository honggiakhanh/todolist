import './App.css';
import { useState } from 'react';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoForm/Form';

const todoList = [];

function App() {
  const [list, setList] = useState(todoList);

  const addData = title => {
    setList(prevState => {
      return [...prevState, { id: Math.random(), title: title }];
    });
  };

  const deleteData = id => {
    setList(prevState => {
      return prevState.filter(item => item.id !== id);
    });
  };

  return (
    <div className='App'>
      <div className='container'>
        <ToDoForm onAddData={addData} />
        <ToDoList onDelete={deleteData} list={list} />
      </div>
    </div>
  );
}

export default App;
