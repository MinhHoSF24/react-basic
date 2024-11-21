/* eslint-disable react/prop-types */
 
import { useState } from 'react';

const TodoNew = (props) => {
  const { addNewTodo } = props;
  const [valueInput, setValueInput] = useState('');
  const handleClick = () => {
    addNewTodo(valueInput);
  };
  const handleOnChange = (name) => {
    setValueInput(name);
  };
  return (
    <>
      <div className="todo-new">
        <input
          type="text"
          onChange={(event) => handleOnChange(event.target.value)}
        />
        <button style={{ cursor: 'pointer' }} onClick={handleClick}>
          Add
        </button>
        <div>My text input = {valueInput} </div>
      </div>
    </>
  );
};
export default TodoNew;
