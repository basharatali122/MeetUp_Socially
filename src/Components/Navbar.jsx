import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm text-white mynav">
      <div className="container">
        <a className="navbar-brand" href="/">MeetUp</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="d-flex gap-2">
            <a className="btn btn-outline-primary" href="/signin">Sign In</a>
            <a className="btn btn-primary" href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
