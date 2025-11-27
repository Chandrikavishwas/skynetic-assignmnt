import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-box">
        <nav>
          <div className="navbar">
            <div className="nav-first-box">Peekit.ai</div>

            <div className="secondBox">
              <div className="trends">Trends</div>
              <div className="alerts">Alerts & Bookmarks</div>
              <div className="dashboard">My Dashboard</div>
            </div>

            <div className="thirdBox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1f1f1f"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1f1f1f"
              >
                <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1f1f1f"
              >
                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
              </svg>
            </div>
          </div>
        </nav>

        <header className="header">
          <div className="header-fist-box">
            <p>Browse All Trends</p>
            <div className="header-hifen"></div>
            <p>Or</p>
            <div className="header-hifen"></div>
            <p>Keyword Search</p>
          </div>

          <div className="header-second-box">
            <div className="header-hifen"></div>
            <h3>TOP TRENDS TODAY</h3>
            <div className="header-hifen"></div>
          </div>

          <div className="header-third-box">
            <p>
              See which conversations are heating up, cooling down, or about to
              take off - with Hot, Cold and Rising Soon topic insights.
            </p>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
