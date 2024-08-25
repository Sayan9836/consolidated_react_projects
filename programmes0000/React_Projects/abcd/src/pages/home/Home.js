import React, { useState } from "react";
import "./Home.css";
import { useRef } from "react";
import MIC from "../../assests/mic.png";
import BroadProfile from "../../components/broadprofile/BroadProfile";
import { Link } from "react-router-dom";
const Home = () => {
  const [bigprofile, setBigProfile] = useState(false);
  const [words, SetWords] = useState("");
  // const inputRef = useRef();
  // const handleClick = () => {
  //     inputRef.current.value = inputRef.current.focus()
  // }

  const getWord = (text) => {
    SetWords(text);
  };
  return (
    <div className="page">
      {!bigprofile ? (
        <div className="pagePart1">
          <div className="words">{words}</div>
          <div className="profile" onClick={() => setBigProfile(true)}>
            <span>S</span>
          </div>
          <div className="container">
            <div className="logo">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751__340.png"
                alt=""
              />
            </div>

            <div className="search-bar">
              <input type="text" placeholder="search here" />
              <img className="microphone" src={MIC} alt="" />
            </div>

            <div className="buttons">
              <Link to="/Home/Python">
                <button>Hello python</button>
              </Link>
              <Link to="/Home/News">
                <button> Latest News</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <BroadProfile setBigProfile={setBigProfile} getWord={getWord} />
      )}
    </div>
  );
};

export default Home;
