import React from "react";

const Table = () => {
  const dummyData = [
    {
      id: 1,
      firstname: "John",
      lastname: "Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      firstname: "Jane",
      lastname: "Doe",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      firstname: "Alice",
      lastname: "Smith",
      email: "alice@example.com",
      phone: "555-123-4567",
    },
    {
      id: 4,
      firstname: "Bob",
      lastname: "Johnson",
      email: "bob@example.com",
      phone: "777-888-9999",
    },
    {
      id: 5,
      firstname: "Eve",
      lastname: "Wilson",
      email: "eve@example.com",
      phone: "333-222-1111",
    },
    {
      id: 6,
      firstname: "Michael",
      lastname: "Brown",
      email: "michael@example.com",
      phone: "999-888-7777",
    },
    {
      id: 7,
      firstname: "Emma",
      lastname: "Davis",
      email: "emma@example.com",
      phone: "111-222-3333",
    },
    {
      id: 8,
      firstname: "James",
      lastname: "Taylor",
      email: "james@example.com",
      phone: "444-555-6666",
    },
    {
      id: 9,
      firstname: "Olivia",
      lastname: "Miller",
      email: "olivia@example.com",
      phone: "666-555-4444",
    },
    {
      id: 10,
      firstname: "William",
      lastname: "Wilson",
      email: "william@example.com",
      phone: "222-333-4444",
    },
  ];

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
          {dummyData ? (
            dummyData.map((user) => (
              <tr key={user.id}>
                <td className="text-center">{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="text-center">
                  <button className="btn btn-info mx-1 text-white" title="View">
                    <i class="fa-solid fa-eye"></i>
                  </button>
                  <button className="btn btn-primary mx-1" title="Edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="btn btn-danger mx-1" title="Delete">
                    <i class="fa-solid fa-trash-can"></i>
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
