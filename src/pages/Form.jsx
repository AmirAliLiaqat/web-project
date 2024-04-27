import React from "react";

const Form = () => {
  return (
    <div className="container my-5">
      <form className="border rounded p-3">
        <div className="form-group mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="email"
            className="form-control"
            id="firstName"
            placeholder="enter first name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="email"
            className="form-control"
            id="lastName"
            placeholder="enter last name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="enter your email address"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            placeholder="enter last name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="enter last name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="enter last name"
          />
        </div>
        <div className="text-end">
          <button type="submit" className="btn btn-lg btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
