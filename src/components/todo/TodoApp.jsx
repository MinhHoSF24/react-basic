import TodoData from './TodoData';
import TodoNew from './TodoNew';
import './todo.css';
import ReactLogo from '../../assets/react.svg';
import { useState } from 'react';
import Cookies from 'js-cookie';

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
    Cookies.set('name', 'minhho', { expires: 7 });
  };

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      {/* {todoList.length > 0 && <TodoData todoList={todoList} />}
      {todoList.length === 0 && (
        <div className="todo-image">
          <img className="logo" src={ReactLogo} alt="" />
        </div>
      )} */}
      {todoList.length > 0 ? (
        <TodoData todoList={todoList} deleteTodo={deleteTodo} />
      ) : (
        <div className="todo-image">
          <img className="logo" src={ReactLogo} alt="" />
        </div>
      )}
    </div>
  );
};

export default TodoApp;