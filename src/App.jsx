import './App.css'
import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import ReactLogo from './assets/react.svg'
import {useState} from 'react'

function App() {

  const [todoList, setTodoList] = useState([
    {id: 1, name: "Learning React"},
    {id: 2, name: "Watching Youtube"},
  ])

  const name = 'Minh Ho';
  const data = {
    city: "Can Tho",
    address: "Hau Giang"
  }
  const addNewTodo = (name) => {
    const newTodo = {
      id: 3,
      name: name
    }
    setTodoList([...todoList, newTodo]);
  }
  return (
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo}/>
        <TodoData name={name}
        data={data}
        todoList={todoList}/>
        <div className="todo-image">
          <img className="logo" src={ReactLogo} alt="" />
        </div>
      </div>
  )
}

export default App
