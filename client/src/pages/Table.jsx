import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState();
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    // Fetch data from backend API when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make GET request to backend API
      const response = await axios.get("http://localhost:5000/api/users");
      // Update state with fetched user data
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching all users:", error);
    }
  };

  const handleView = async (userId) => {
    try {
      // Make GET request to backend API
      const response = await axios.get(
        `http://localhost:5000/api/users/${userId}`
      );
      // Update state with fetched user data
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching single user:", error);
    }
  };

  const handleEdit = (userId) => {
    // Implement edit logic here
    console.log("Edit user with ID:", userId);
  };

  const handleDelete = async () => {
    try {
      // Make DELETE request to backend API
      await axios.delete(`http://localhost:5000/api/users/${deleteUserId}`);
      // Remove the deleted user from state
      setUserData(userData.filter((user) => user.id !== deleteUserId));
      // Close confirmation modal
      setShowConfirmationModal(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container my-5">
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <th className="text-center">Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Phone</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.length ? (
            userData.map((user, index) => (
              <tr key={user._id}>
                <td className="text-center">{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td className="text-center">
                  <button
                    className="btn btn-info mx-1 text-white"
                    title="View"
                    data-bs-toggle="modal"
                    data-bs-target="#viewUserModal"
                    onClick={() => handleView(user._id)}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-primary mx-1"
                    title="Edit"
                    onClick={() => handleEdit(user._id)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    title="Delete"
                    data-bs-toggle="modal"
                    data-bs-target="#confirmationModal"
                    onClick={() => {
                      setDeleteUserId(user._id);
                      setShowConfirmationModal(true);
                    }}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                <p className="fw-bolder text-danger">No Data Found</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* User View Modal */}
      <div
        className="modal fade"
        id="viewUserModal"
        tabIndex="-1"
        aria-labelledby="viewUserLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                User Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="row">Firstname:</th>
                    <td>{user?.firstName}</td>
                  </tr>
                  <tr>
                    <th scope="row">Lastname:</th>
                    <td>{user?.lastName}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email:</th>
                    <td>{user?.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone Number:</th>
                    <td>{user?.phoneNumber}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <div
        className={`modal fade ${showConfirmationModal ? "show" : ""}`}
        id="confirmationModal"
        tabIndex="-1"
        aria-labelledby="confirmationModalLabel"
        aria-hidden={!showConfirmationModal}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmationModalLabel">
                Confirmation
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowConfirmationModal(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this user?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowConfirmationModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
