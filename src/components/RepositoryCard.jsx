import React from "react";


const RepositoryCard = ({ repo }) => {
  return (
    <div className="repository-card">
      <div className="repository-header">
        <div className="repository-title">
          {repo.name}{" "}
          <span className={repo.type.toLowerCase()}>{repo.type}</span>
        </div>
        </div>
        <div className="repository-content">
        <div> {repo.size} </div>
        <div>Updated: {repo.updated}</div>
        </div>
    </div>
  );
};

export default RepositoryCard;
