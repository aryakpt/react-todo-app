import react, { useContext } from "react";
import TodoCard from "./TodoCard";
import TodoForm from "./TodoForm";

import { TodoContext } from "./TodoContext";
const Todo = () => {
  const { todo } = useContext(TodoContext);

  // console.log(todo)

  return (
    <div className="todo">
      <TodoForm />
      <div className="todo-list">
        <div className="todo-list-uncompleted">
          <h2>--- Uncompleted ---</h2>
          {todo.map((todo) => {
            const date = new Date();
            // console.log(date.getTime());
            // console.log(new Date(todo.deadline));
            if (todo.status === "uncompleted" && new Date(todo.deadline) >= new Date()) {
              return <TodoCard todo={todo} theme={null} key={todo.id} />;
            } else if (todo.status === "uncompleted" && new Date(todo.deadline) < new Date()) {
              return <TodoCard todo={todo} theme={`red`} key={todo.id} />;
            }
          })}
        </div>
        <div className="todo-list-completed">
          <h2>--- Completed ---</h2>
          {todo.map((todo) => {
            if (todo.status === "completed") {
              return <TodoCard todo={todo} theme={null} key={todo.id} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
