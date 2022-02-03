import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <Link to={`/todo`}>Todo List App</Link>
    </div>
  );
};

export default Nav;
