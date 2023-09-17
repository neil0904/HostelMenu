import React from "react";
import "./styles.css";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-group">
          {menuList.map((curElem) => {
            return (
              <button className="nav-item" onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
