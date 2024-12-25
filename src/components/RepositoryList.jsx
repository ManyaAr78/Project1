import React from "react";
import RepositoryCard from "./RepositoryCard";

const repositories = [
  { name: "design-system", type: "Public", size: "7320 KB", updated: "1 day ago" },
  { name: "codeant-ci-app", type: "Private", size: "5871 KB", updated: "2 days ago" },
  { name: "analytics-dashboard", type: "Private", size: "4521 KB", updated: "5 days ago" },
  { name: "mobile-app", type: "Private", size: "3098 KB", updated: "3 days ago" },
  { name: "e-commerce-platform", type: "Private", size: "8210 KB", updated: "4 days ago" },
  { name: "blog-website", type: "Private", size: "1878 KB", updated: "4 days ago" },
  { name: "social-network", type: "Private", size: "5423 KB", updated: "7 days ago" },
];

const RepositoryList = () => {
  return (
    <div className="repository-list">
      {repositories.map((repo, index) => (
        <RepositoryCard key={index} repo={repo} />
      ))}
    </div>
  );
};

export default RepositoryList;
