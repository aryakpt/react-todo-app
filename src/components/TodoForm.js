import react, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { v4 as uuid } from "uuid";

const TodoForm = () => {
  const { todo, setTodo, input, setInput } = useContext(TodoContext);
  const submitHandler = (e) => {
    e.preventDefault();
    setTodo([...todo, { id: uuid(), ...input, status: "uncompleted" }]);
    setInput({ title: "", description: "", deadline: "" });
  };

  const changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <h1>Todo List App</h1>
      <div className="todo-form">
        <form onSubmit={submitHandler}>
          <div>
            <label>Title: </label>
            <input type="text" name="title" value={input.title} onChange={changeHandler} required />
          </div>
          <div>
            <label>Description: </label>
            <textarea name="description" cols="30" rows="3" value={input.description} onChange={changeHandler} required></textarea>
          </div>
          <div>
            <label>Deadline: </label>
            <input type="date" name="deadline" value={input.deadline} onChange={changeHandler} required />
          </div>
          <button className="btn-primary" style={{ marginTop: "10px" }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
