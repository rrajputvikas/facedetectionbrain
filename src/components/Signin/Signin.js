import React from "react";

const Signin = ({ onRouteChange }) => {
  return (
    <div
      className="card container bg-transparent shadow fs-5"
      style={{ width: "20rem" }}
    >
      <form className="p-3 d-flex flex-column">
        <legend className="fs-2 text-center">Sign In</legend>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <button
        type="submit"
        className="btn btn-color rounded-2 align-self-end"
        onClick={() => onRouteChange("home")}
        >
        Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
