import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
import recipeIcon from "/assets/logo.png";
import { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const client_id =
  "705348614157-a72p1367ihuicvn57llb1ngac74itclo.apps.googleusercontent.com";

import { loadData } from '../../pages/Contents'



function Navbar() {
  loadData().then(() => {
    console.log('Data loaded successfully');
    // Now you can start your application or perform other operations
  });
  
  
  const linkVariants = {
    hover: { scale: 1.05, originX: 0, color: "#ffffff" },
    tap: { scale: 0.95 },
  };

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          console.log("Profile:", res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to lothe user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="navbar-container">
        <Link to="/." className="navbar-title">
          <img src={recipeIcon} alt="Recipe" className="navbar-icon" />
          Recepi Blog
        </Link>
        <ul className="navbar-list">
          {["Appetizer", "Main Course", "Soup", "Dessert"].map((item) => (
            <li className="nav-item" key={item}>
              <motion.div
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                  className="nav-links"
                >
                  {item}
                </Link>
              </motion.div>
            </li>
          ))}
          {profile ? (
            <img
              src={profile.picture}
              alt="user image"
              style={{ borderRadius: "50%", height: "50px" }}
            />
          ) : (
            <button style={{ borderRadius: "10px" }} onClick={() => login()}>
              Sign in with Google
            </button>
          )}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
