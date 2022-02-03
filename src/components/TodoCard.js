import react, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoCard = (props) => {
  const { functions } = useContext(TodoContext);
  const { completedHandler, uncompletedHandler, deleteHandler } = functions;
  const { ...todo } = props.todo;

  const actionButton = (e) => {
    e.preventDefault();
    if (todo.status === "completed") {
      completedHandler(todo.id);
    } else {
      uncompletedHandler(todo.id);
    }
  };

  const deleteButton = (e) => {
    e.preventDefault();
    deleteHandler(todo.id);
  };
  return (
    <>
      <div className={`card ${props.theme}`} key={todo.id}>
        <div className="card-title">
          <h3>{todo.title}</h3>
        </div>
        <div className="card-body">
          <p>{todo.description}</p>
          <small>Deadline: {todo.deadline}</small>
        </div>
        <div className="card-button">
          <button className="btn-primary" onClick={actionButton}>
            {todo.status === "uncompleted" ? "Finished" : "Unfinished"}
          </button>
          <button className="btn-danger" onClick={deleteButton} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
