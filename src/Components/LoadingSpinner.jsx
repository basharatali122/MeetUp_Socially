import React from "react";

const LoadingSpinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
