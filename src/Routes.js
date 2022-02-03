import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Todo from "./components/Todo";
import { TodoProvider } from "./components/TodoContext";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={`/`}>
            <Nav />
          </Route>
          {/* Todo */}
          <TodoProvider>
            <Route exact path={`/todo`}>
              <Todo />
            </Route>
          </TodoProvider>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
