import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>CodeAnt AI</h2>
      {}
      <div className="input-container">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="enter your email"
          className="search-input"
        />
      </div>
      <div className="whole">
        <div className="up-elements">
          <ul className="ul">
            <li>
              <img src="/images/home.png" alt="Home Icon" height="20px" width="20px" />
              Repositories
            </li>
            <li>
              <img src="/images/cloud.png" alt="Cloud Icon" height="20px" width="20px" />
              Cloud Security
            </li>
            <li>
              <img src="/images/book.png" alt="Book Icon" height="20px" width="20px" />
              How to Use
            </li>
            <li>
              <img src="/images/set.png" alt="Settings Icon" height="20px" width="20px" />
              Settings
            </li>
          </ul>
        </div>
        <div className="down-elements">
          <ul className="ul">
            <li>
              <img src="/images/support.png" alt="Support Icon" height="20px" width="20px" />
              Support
            </li>
            <li>
              <img src="/images/logout.png" alt="Logout Icon" height="20px" width="20px" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
