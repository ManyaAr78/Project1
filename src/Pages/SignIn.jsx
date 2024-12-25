import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaBitbucket } from "react-icons/fa6";
import { VscAzureDevops } from "react-icons/vsc";
import { FaSquareGitlab } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";

function SignIn() {
  const [activeTab, setActiveTab] = useState("SAAS");

  return (
    <div className="signin-container">
      <div className="main-container">
        <div className="features-card">
          <h3>AI to Detect & Autofix Bad Code</h3>
          <div className="ul1">
            <div className="w1">
              <p>30+</p>
              <span>Languages Support</span>
            </div>
            <div className="w1">
              <p>10+</p>
              <span>Developers</span>
            </div>
            <div className="w1">
              <p>100+</p>
              <span>Hours Saved</span>
            </div>
          </div>
        </div>
        <div className="main-cont">
          <div className="content1">
            <div className="pie-icon">
              <img src="/images/pie.png" alt="Home Icon" height="40px" width="40px" />
            </div>
            <div className="words2">
              <p>Issues Fixed</p>
            </div>
            <div className="words1">
              <span className="issues-count">500K+</span>
            </div>
          </div>
          <div className="content2">
            <p className="percentage">↑ 14% this week</p>
          </div>
        </div>
      </div>
      <div className="login-card">
        <h1>CodeAnt AI</h1>
        <h2>Welcome to CodeAnt AI</h2>
        <div className="tabs">
          <button
            className={activeTab === "SAAS" ? "active" : ""}
            onClick={() => setActiveTab("SAAS")}
          >
            SAAS
          </button>
          <button
            className={activeTab === "Self Hosted" ? "active" : ""}
            onClick={() => setActiveTab("Self Hosted")}
          >
            Self Hosted
          </button>
        </div>
        <div className="login-options">
          
          {activeTab === "SAAS" ? (
            <>
              <button>
                <FaGithub /> Sign in with Github
              </button>
              <button>
                <FaBitbucket /> Sign in with Bitbucket
              </button>
              <button>
                <VscAzureDevops /> Sign in with Azure DevOps
              </button>
              <button>
                <FaSquareGitlab /> Sign in with GitLab
              </button>
            </>
          ) : (
            <>
              <button>
              <FaSquareGitlab /> Self hosted with GitLab
              </button>
              <button> <IoKeyOutline />Sign in with SSO</button>
            </>
          )}
        </div>
        <p>
          By signing up you agree to the <a href="/">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default SignIn;
