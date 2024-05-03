import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // Handler to update form data when inputs change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowAlert(true);

    try {
      // Send POST request to backend API to create user
      const response = await axios.post(
        "http://localhost:5000/api/users",
        formData
      );

      if (response.status === 200) {
        setAlertColor("success");
        setAlertMessage("User submitted successfully...");
      }
    } catch (error) {
      setAlertColor("danger");
      setAlertMessage("Error facing to submit user");
    }

    // Clear form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });

    // Hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="container my-5">
      <h1>User Detail:</h1>
      {showAlert && (
        <div
          className={`alert alert-${alertColor} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{alertMessage}</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <form className="border rounded p-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="form-group mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                required
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                required
                type="tel"
                className="form-control"
                id="phoneNumber"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                required
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                required
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>
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
