import React from "react";

const UserViewModal = ({ user }) => (
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
);

export default UserViewModal;
