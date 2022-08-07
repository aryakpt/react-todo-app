import React from "react";

const Modal = ({ isActive }) => {
  return <div className={`modal ${isActive ? "active" : ""}`}>Modal</div>;
};

export default Modal;
