import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/recipe_demo/" className="navbar-title">
            Food Blog
          </Link>

          <ul className="navbar-list">
            <li className="nav-item">
              <Link to="/recipe_demo/appetizer" className="nav-links">
                Appetizer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipe_demo/maincourse" className="nav-links">
                Main Course
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipe_demo/soup" className="nav-links">
                Soup
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipe_demo/dessert" className="nav-links">
                Dessert
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
