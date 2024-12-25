import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalRepositories, setTotalRepositories] = useState(0);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddRepository = () => {
    navigate("/signup"); // Redirect to the sign-in page
  };

  useEffect(() => {
    const fetchTotalRepositories = () => {
      const fetchedTotal = 10; 
      setTotalRepositories(fetchedTotal);
    };

    fetchTotalRepositories(); 
  }, []);

  return (
    <div className="navbar">
      <div id="ref1">
        <h2>Repositories</h2>
        <div className="repo-details">
          <p> {totalRepositories} repositories</p>
          <div className="icon-wrap">
            <input
              type="text"
              placeholder="Search Repository"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-repo"
            />
            <IoMdSearch className="search-icon" />
          </div>
        </div>
      </div>
      <div className="repo-buttons">
        <button className="refresh-all">
          <img src="/images/logo1.png" alt="Refresh Icon" className="refresh-icon" />
          Refresh All
        </button>
        <button className="add-repo" onClick={handleAddRepository}>
          + Add Repository
        </button>
      </div>
    </div>
  );
};

export default Navbar;
