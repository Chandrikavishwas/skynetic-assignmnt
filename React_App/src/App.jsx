import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaArrowRight } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="main-box">
        <nav>
          <div className="navbar">
            <div className="logo">
              <div className="purple">*                
              </div>
              <div className="nav-first-box">Peekit.ai</div>
            </div>
            

            <div className="secondBox">
              <div className="trends">Trends</div>
              <div className="alerts">Alerts & Bookmarks</div>
              <div className="alerts">My Dashboard</div>
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

        <section>
          <div className="section-box">
            <div className="sorce-box">
              <div>
                <p>SOURCE</p>
              </div>
              <div className="hading">
                <p>
                  <svg
                    className="icons"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#d66b6bff"
                  >
                    <path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z" />
                  </svg>
                  HOT
                </p>
              </div>
              <div className="hading">
                <p>
                  <svg
                    className="icons"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#dbd95ebb"
                  >
                    <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
                  </svg>
                  RISING SOON
                </p>
              </div>
              <div className="hading">
                <p>
                  <svg
                    className="icons"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#99b0c1ff"
                  >
                    <path d="M440-80v-166L310-118l-56-56 186-186v-80h-80L174-254l-56-56 128-130H80v-80h166L118-650l56-56 186 186h80v-80L254-786l56-56 130 128v-166h80v166l130-128 56 56-186 186v80h80l186-186 56 56-128 130h166v80H714l128 130-56 56-186-186h-80v80l186 186-56 56-130-128v166h-80Z" />
                  </svg>
                  COLD
                </p>
              </div>
            </div>
            <hr classname="hr-line" />

            <div className="section-icons-box">
              <div className="main-client-icons">
                <p>
                  <div className="client-icons">
                    <img
                      className="client-img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
                      alt=""
                    />
                  </div>
                  Instagram
                </p>
              </div>
              <div className="arrow-icon">
                <p>
                  Relatable student Exhaustion Meme 
                </p>
                <FaArrowRight />
              </div>
              <div className="arrow-icon">
                <p>
                  HYROX Pro Doubles Functional Fitness Competition
                  
                </p>
                <FaArrowRight />
              </div>
              <div className="arrow-icon">
                <p>
                  Humorous Take on Delayed Friend Text Replies with Winter
                  Aesthetic
                  
                </p>
                <FaArrowRight />
              </div>
            </div>
            <hr classname="hr-line" />
            <div className="section-icons-box">
              <div className="main-client-icons">
                <p>
                  <div className="client-icons">
                    <img
                      className="client-img"
                      src="https://img.freepik.com/premium-photo/square-tiktok-logo-isolated-white-background_469489-1029.jpg?semt=ais_hybrid&w=740&q=80"
                      alt=""
                    />
                  </div>
                  Tiktok
                </p>
              </div>
              <div className="arrow-icon">
                <p>
                  Daily Mail viral UK news video 
                </p>
                <FaArrowRight />
              </div>
              <div className="arrow-icon">
                <p>
                  steezytour London event viral video 
                </p>
                <FaArrowRight />
              </div>
              <div className="arrow-icon">
                <p>
                  ellie.szO London trending lifestyle
                </p>
                 <FaArrowRight />
              </div>
            </div>
            <hr classname="hr-line" />
            <div className="section-icons-box">
              <div className="main-client-icons">
                <p>
                  <div className="client-icons">
                    <img
                      className="client-img"
                      src="https://img.freepik.com/premium-psd/black-brand-new-twitter-x-logo-icon_1129635-1.jpg?semt=ais_hybrid&w=740&q=80"
                      alt=""
                    />
                  </div>
                  X
                </p>
              </div>
              <div className="arrow-icon">
                <p>
                  #Chelsea (football trending)
                </p>
                <FaArrowRight />
              </div>
              <div className="arrow-icon">
                <p>
                  #CurrysTechmas (UK retailer tech promotion) 
                </p>
                <FaArrowRight />
              </div>
              <div className="arrow-icon">
                <p>
                  #ManchesterUnited (football trending)                  
                </p>
                <FaArrowRight />
              </div>
            </div>
            <hr classname="hr-line" />
            <div className="section-icons-box">
              <div className="main-client-icons">
                <p>
                  <div className="client-icons">
                    <img
                      className="client-img"
                      src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                      alt=""
                    />
                  </div>
                  Youtube
                </p>
              </div>
              <div className="arrow-icon">
                <p>
                  SIDEMEN VS 50 YOUTUBERS ULTIMATE HIDE & SEEK IN A MILITARY
                  BASE                  
                </p>
                <FaArrowRight />
              </div>
              <div className="arrow-icon">
                <p>
                  Can I Beat An F1 Driver? 
                </p>
                <FaArrowRight />
              </div>
              <div className="arrow-icon">
                <p>
                  DIGGA - DPMO (UK drill/urban music)
                  
                </p>
                <FaArrowRight />
              </div>
            </div>
            <hr classname="hr-line" />
            <div className="section-icons-box">
              <div className="main-client-icons">
                <p>
                  <div className="client-icons">
                    <img
                      className="client-img"
                      src="https://peekit.ai/Google-Symbol.png"
                      alt=""
                    />
                  </div>
                  Google News
                </p>
              </div>
              <div className="arrow-icon">
                <p>
                  Pay rise for millions as UK national minimum wage to rise (ITV
                  News)
                  
                </p>
                <FaArrowRight />
              </div>
              <div className="arrow-icon">
                <p>
                  Sir Richard Branson 'heartbroken' as wife Joan dies aged 80
                  
                </p>
                <FaArrowRight />
              </div>
              <div className="arrow-icon">
                <p>
                  Heathrow's plan for longer third runway chosen by government
                  
                </p>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-box">
            <h2>All the Trends in one place</h2>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
