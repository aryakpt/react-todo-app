import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Todo from "../../components/Todo";
import { TodoProvider } from "../../components/TodoContext";
import { Home } from "../../pages";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={`/`}>
            <Home />
          </Route>
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
