import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const client_id =
  "705348614157-a72p1367ihuicvn57llb1ngac74itclo.apps.googleusercontent.com";

function LoginButton({user, setUser}) {
  const [initalU, setinitalU] = useState(null);
  //const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      await setinitalU(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (initalU) {
      console.log("Login Success");
      console.log(initalU);
      console.log(initalU.access_token);
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${initalU.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${initalU.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then(async (res) => {
          setUser(res.data);
          console.log("Profile:", res.data);
          try {
            const response = await fetch(import.meta.env.VITE_APP_API_URL + "/users", {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: res.data.email }), // No headers here as browser will set the correct 'Content-Type' for FormData
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log("Get User info successful", responseData);
          } catch (error) {
            console.error("Error:", error.message);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [initalU]);

  // log out function to lothe user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  const [hovered, setHovered] = useState(false);

  const hoverStyles = {
    opacity: 0.6,
    borderRadius: "50%", 
    height: "60px"
  }
  
  const defaultStyles = {
    borderRadius: "50%", 
    height: "50px"
  }

  return (
    <>
      {user ? (
        <Link to="/upload">
          <img
            src={user.picture}
            alt="user image"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={hovered ? hoverStyles : defaultStyles}
          />
        </Link>
      ) : (
        <button style={{ borderRadius: "10px" }} onClick={() => login()}>
          Sign in with Google
        </button>
      )}
    </>
  );
}

export default LoginButton;
