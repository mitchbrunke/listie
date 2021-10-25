//styles
import "./todoList.css";

const TodoList = ({ toDos, setToDos }) => {
  console.log(toDos);
  return (
    <div className="todoList">
      {toDos.map((todo) => (
        <div key={todo.id} className="single_todo">
          <h5>{todo.text}</h5>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
