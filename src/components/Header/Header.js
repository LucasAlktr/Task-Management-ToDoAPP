import React from "react";
import "./Header.scss";
import { FaTasks } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="title">
        <FaTasks /> Todo App
      </div>
      <div className="author">by Lucas Santos</div>
    </header>
  );
}
export default Header;
