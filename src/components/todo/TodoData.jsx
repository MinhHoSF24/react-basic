/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const TodoData = (props) => {
  const {id, todoList, deleteTodo } = props;
  const handleDeleteClick = () => {
    deleteTodo(id);
    // setValueInput('');
  };
  console.log('>>>> check todoList: ', todoList);
  return (
    <>
      <div className="todo-data">
        {todoList.map((item) => {
          return (
            <>
              <div className={`todo-item ${item.id}`} key={item.id}>
                <div style={{margin: "10px 0px"}}>{item.name}</div>
                <button style={{cursor: 'pointer'}} onClick={() => deleteTodo(item.id)}>Delete</button>
              </div>
            </>
          );
        })}
        <div>{JSON.stringify(props.todoList)}</div>
      </div>
    </>
  );
};
export default TodoData;
