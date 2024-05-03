import React from "react";

const ConfirmationModal = ({ show, onCancel, onConfirm }) => (
  <div
    className={`modal fade ${show ? "show" : ""}`}
    id="confirmationModal"
    tabIndex="-1"
    aria-labelledby="confirmationModalLabel"
    aria-hidden={!show}
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
            onClick={onCancel}
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
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="button" className="btn btn-danger" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ConfirmationModal;
