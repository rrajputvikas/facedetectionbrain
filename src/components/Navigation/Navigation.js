import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn, route }) => {
  
  if(isSignedIn) {
    return (
      <nav className="d-flex justify-content-end sticky-top">
        <p
          onClick={() => onRouteChange("home")}
          className="fs-4 m-3 p-1 rounded-3 text-white hover-underline-animation"
          role="button"
        >
          Home
        </p>
        <p
          onClick={() => onRouteChange("about")}
          className="fs-4 m-3 p-1 rounded-3 text-white hover-underline-animation"
          role="button"
        >
          About
        </p>
        <p
          onClick={() => onRouteChange("signout")}
          className="fs-4 m-3 p-1 rounded-3 text-white hover-underline-animation"
          role="button"
        >
          Sign Out
        </p>
      </nav>
    );
  }
  else {
    if(route === 'registration') {
      return(
        <nav className="d-flex justify-content-end sticky-top">
          <p
            onClick={() => onRouteChange("signin")}
            className="fs-4 m-3 p-1 rounded-3 text-white hover-underline-animation"
            role="button"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("about")}
            className="fs-4 m-3 p-1 rounded-3 text-white hover-underline-animation"
            role="button"
          >
            About
          </p>
        </nav>
      );
    }
    else if(route === 'signin'){
      return(
        <nav className="d-flex justify-content-end sticky-top">
          <p
            onClick={() => onRouteChange("registration")}
            className="fs-4 m-3 p-1 rounded-3 text-white hover-underline-animation"
            role="button"
          >
            New User?
          </p>
          <p
            onClick={() => onRouteChange("about")}
            className="fs-4 m-3 p-1 rounded-3 text-white hover-underline-animation"
            role="button"
          >
            About
          </p>
        </nav>
      );
    }
    else {
      return(
        <nav className="d-flex justify-content-end sticky-top">
          <p
            onClick={() => onRouteChange("signin")}
            className="fs-4 m-3 p-1 rounded-3 text-white hover-underline-animation"
            role="button"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("registration")}
            className="fs-4 m-3 p-1 rounded-3 text-white hover-underline-animation"
            role="button"
          >
            New User?
          </p>
        </nav>
      );
    }
  }
};

export default Navigation;
