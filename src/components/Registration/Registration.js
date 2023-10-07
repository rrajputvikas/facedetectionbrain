import React from "react";

const Registration = ({ onRouteChange }) => {
  return (
    <div
      className="card container bg-transparent shadow fs-5"
      style={{ width: "20rem" }}
    >
      <form className="p-3 d-flex flex-column">
        <legend className="fs-2 text-center">Registration</legend>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
          />
        </div>
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
        <button
        type="submit"
        className="btn btn-color rounded-2 align-self-end"
        onClick={() => onRouteChange("home")}
        >
        Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
