import React from 'react';

const Navbar = ({ email, username }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <p className="navbar-email">📧 {email}</p>
        {username && <p className="navbar-username">👤 {username}</p>}
      </div>
    </div>
  );
};

export default Navbar;
