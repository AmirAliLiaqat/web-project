import React, { useState, useEffect } from "react";
import axios from "axios";
import UserViewModal from "../modals/UserViewModal";
import ConfirmationModal from "../modals/ConfirmationModal";

const TableRow = ({ user, index, onView, onEdit, onDelete }) => (
  <tr>
    <td className="text-center">{index + 1}</td>
    <td>{user.firstName}</td>
    <td>{user.lastName}</td>
    <td>{user.email}</td>
    <td>{user.phoneNumber}</td>
    <td className="text-center">
      <button
        className="btn btn-info mx-1 text-white"
        title="View"
        onClick={() => onView(user._id)}
      >
        <i className="fa-solid fa-eye"></i>
      </button>
      <button
        className="btn btn-primary mx-1"
        title="Edit"
        onClick={() => onEdit(user._id)}
      >
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <button
        className="btn btn-danger mx-1"
        title="Delete"
        onClick={() => onDelete(user._id)}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </td>
  </tr>
);

const DemiTable = () => {
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState();
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching all users:", error);
    }
  };

  const handleView = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/${userId}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching single user:", error);
    }
  };

  const handleEdit = (userId) => {
    console.log("Edit user with ID:", userId);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${deleteUserId}`);
      setUserData(userData.filter((user) => user._id !== deleteUserId));
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
              <TableRow
                key={user._id}
                user={user}
                index={index}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={(userId) => {
                  setDeleteUserId(userId);
                  setShowConfirmationModal(true);
                }}
              />
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

      <UserViewModal user={user} />

      <ConfirmationModal
        show={showConfirmationModal}
        onCancel={() => setShowConfirmationModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default DemiTable;
