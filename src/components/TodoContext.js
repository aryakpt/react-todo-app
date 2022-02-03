import react, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const LOCAL_STORAGE_KEY = "todo";
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState({ title: "", description: "", deadline: "" });

  const completedHandler = (id) => {
    const completed = todo.filter((todo) => todo.id === id);
    completed[0].status = "uncompleted";
    setTodo([...todo]);
  };
  const uncompletedHandler = (id) => {
    const uncompleted = todo.filter((todo) => todo.id === id);
    uncompleted[0].status = "completed";
    setTodo([...todo]);
  };
  const deleteHandler = (id) => {
    const deleted = todo.filter((todo) => todo.id !== id);
    setTodo([...deleted]);
  };

  useEffect(() => {
    const getTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getTodo) setTodo(getTodo.sort((a, b) => new Date(a.deadline) - new Date(b.deadline)));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo));
  }, [todo]);

  const functions = { completedHandler, uncompletedHandler, deleteHandler };
  return <TodoContext.Provider value={{ todo, setTodo, input, setInput, functions }}> {props.children} </TodoContext.Provider>;
};
