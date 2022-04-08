import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import { auth } from "../../Firebase/firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user, setUser] = useState({});
  // console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav
      style={
        pathname.includes("blog") ? { display: "none" } : { display: "flex" }
      }
    >
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="link-container">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/videos"
        >
          Videos
        </NavLink>
        {user.email ? (
          <button onClick={handleLogOut} className="logout-button">
            LogOut
          </button>
        ) : (
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/login"
          >
            Login
          </NavLink>
        )}
        <p>{user.displayName}</p>
      </div>
    </nav>
  );
};

export default Navbar;
