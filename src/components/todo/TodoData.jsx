/* eslint-disable react/prop-types */
const TodoData = (props) => {
  const { name, data } = props;
  console.log('>>>> check props: ', props);
  return (
    <>
      <div className="todo-data">
        <div>Learning React</div>
        <div>Watching Movies</div>
        <div>{name}</div>
        <div>{data.address}</div>
        <div>{JSON.stringify(props.todoList)}</div>
      </div>
    </>
  );
};
export default TodoData;
