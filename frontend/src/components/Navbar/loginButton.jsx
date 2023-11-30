import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const client_id =
  "705348614157-a72p1367ihuicvn57llb1ngac74itclo.apps.googleusercontent.com";

const UserEmailContext = createContext();

export const UserEmailProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <UserEmailContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserEmailContext.Provider>
  );
};

export const useUserEmail = () => {
  return useContext(UserEmailContext);
};

function LoginButton() {
  const { setUserEmail } = useUserEmail();
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
        .then(async (res) => {
          setProfile(res.data);
          console.log("Profile:", res.data);

          setUserEmail(res.data.email);

          try {
            const response = await fetch("http://10.40.134.55:3000/api/users", {
              method: "POST",
              body: { email: res.data.email }, // No headers here as browser will set the correct 'Content-Type' for FormData
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log("Upload successful", responseData);
          } catch (error) {
            console.error("Error:", error.message);
          }
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
    <>
      {profile ? (
        <Link to="/upload">
          <img
            src={profile.picture}
            alt="user image"
            style={{ borderRadius: "50%", height: "50px" }}
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
