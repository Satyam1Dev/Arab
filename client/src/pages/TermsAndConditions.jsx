import React, { useState, useEffect } from "react";

const TermsAndConditions = ({ onAccept, onCancel }) => {
  const [showDialog, setShowDialog] = useState(true);

  useEffect(() => {
    const hasAcceptedTerms = localStorage.getItem("acceptedTerms");
    const hasCanceledTerms = localStorage.getItem("acceptedTerms");

    if (hasAcceptedTerms === "true" || hasCanceledTerms === "true") {
      setShowDialog(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("acceptedTerms", "true");
    setShowDialog(false);
    onAccept(); // Call the onAccept function passed from the parent component
  };

  const handleCancel = () => {
    localStorage.setItem("acceptedTerms", "false"); // Set acceptedTerms to false when canceled
    setShowDialog(false);
    onCancel(); // Call the onCancel function passed from the parent component
  };

  return (
    <div style={{ display: showDialog ? "block" : "none" }}>
      <div
        className="modal-dialog modal-dialog-centered p-3 mt-5 mb-5"
        
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Terms & Conditions</h5>
          </div>
          <div className="modal-body">
            {/* Add your terms and conditions text here */}
            <p className="px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="modal-footer justify-content-around">
            <button className=" btn btn-outline-primary" onClick={handleAccept}>
              Accept
            </button>
            <button className="btn btn-outline-primary " onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
