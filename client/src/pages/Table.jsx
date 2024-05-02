import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [userData, setUserData] = useState([]);

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
      console.error("Error fetching data:", error);
    }
  };

  const handleView = (userId) => {
    // Implement view logic here
    console.log("View user with ID:", userId);
  };

  const handleEdit = (userId) => {
    // Implement edit logic here
    console.log("Edit user with ID:", userId);
  };

  const handleDelete = async (userId) => {
    try {
      // Make DELETE request to backend API
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      // Remove the deleted user from state
      setUserData(userData.filter((user) => user.id !== userId));
      console.log("User deleted successfully");
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
              <tr key={user.id}>
                <td className="text-center">{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td className="text-center">
                  <button
                    className="btn btn-info mx-1 text-white"
                    title="View"
                    onClick={() => handleView(user.id)}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-primary mx-1"
                    title="Edit"
                    onClick={() => handleEdit(user.id)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    title="Delete"
                    onClick={() => handleDelete(user.id)}
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
    </div>
  );
};

export default Table;
