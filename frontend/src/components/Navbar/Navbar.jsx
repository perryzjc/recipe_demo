import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import recipeIcon from '/assets/logo.png';

import { loadData } from '../../pages/Contents'



function Navbar() {
  loadData().then(() => {
    console.log('Data loaded successfully');
    // Now you can start your application or perform other operations
  });
  
  
  const linkVariants = {
    hover: { scale: 1.05, originX: 0, color: "#ffffff" },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav className="navbar" initial={{ y: -250 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 20 }}>
      <div className="navbar-container">
        <Link to="/." className="navbar-title">
        <img src={recipeIcon} alt="Recipe" className="navbar-icon" />
          Recepi Blog
        </Link>
        <ul className="navbar-list">
          {['Appetizer', 'Main Course', 'Soup', 'Dessert'].map(item => (
            <li className="nav-item" key={item}>
              <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <Link to={`/${item.toLowerCase().replace(/\s/g, "")}`} className="nav-links">{item}</Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
