import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiAddToQueue, BiEraser,  BiHighlight  } from "react-icons/bi";
import './IndexHelp.scss'

function IndexHelp ()  {
  return (
    <>
      <div>
        <h1>Help</h1>
      </div>
      <div>
        <h2>About This Section.</h2>
      </div>
      <div>
        <p>Hello, in this section you can find some tips to help you to use our App!</p>
        <Outlet />
      </div>
      <nav className="help-nav">
        < NavLink to='/help/adding'><BiAddToQueue />Adding Tasks</NavLink>
        < NavLink to='/help/changing'><BiHighlight />Changing Tasks</NavLink>
        < NavLink to='/help/removing'><BiEraser />Removing Tasks</NavLink>
      </nav>
    </>
  );
}

export default IndexHelp;
