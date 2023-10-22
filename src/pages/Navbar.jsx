import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const linkVariants = {
    hover: { scale: 1.1, originX: 0, color: "#e44d26" },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav className="navbar" initial={{ y: -250 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120 }}>
      <div className="navbar-container">
        <Link to="/recipe_demo/" className="navbar-title">Food Blog</Link>
        <ul className="navbar-list">
          {['Appetizer', 'Main Course', 'Soup', 'Dessert'].map(item => (
            <li className="nav-item" key={item}>
              <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <Link to={`/recipe_demo/${item.toLowerCase()}`} className="nav-links">{item}</Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
