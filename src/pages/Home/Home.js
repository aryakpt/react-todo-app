import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Link to={`/todo`}>Todo List App</Link>
    </div>
  );
};

export default Home;
