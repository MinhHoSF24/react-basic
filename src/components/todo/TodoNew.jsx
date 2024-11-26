/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from 'react';

const TodoNew = (props) => {
  const {id, addNewTodo, deleteTodo } = props;
  const [valueInput, setValueInput] = useState('Minh Ho');
  const handleAddNewClick = () => {
    addNewTodo(valueInput);
    setValueInput('');
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
          value={valueInput}
        />
        <button style={{ cursor: 'pointer' }} onClick={handleAddNewClick}>
          Add
        </button>
        <div>My text input = {valueInput} </div>
      </div>
    </>
  );
};
export default TodoNew;
