import React from "react";
import "./Header.scss";
import { FaTasks } from "react-icons/fa";
import MainMenu from "../MainMenu/index"

function Header() {
  return (
    <>
      <header>
        <div className="title">
          <FaTasks /> Todo App
        </div>
        <div className="author">by Lucas Santos</div>
      </header>
      <MainMenu/>
    </>
  );
}
export default Header;
