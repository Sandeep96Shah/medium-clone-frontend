import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LeftSection } from "./styles";
import logo from "../../assets/user-logo.png";
import avatar from "../../assets/avatar.webp";
import { AiFillHome } from "react-icons/ai";
import { FaRegClone, FaRegEdit, FaRegFileAlt } from "react-icons/fa";

export default function Index() {
  const [selectedOption, setSelectedOption] = useState("home");
  const handleSelectedOption = (val) => {
    setSelectedOption(val);
  };
  return (
    <LeftSection>
      <div className="logo" onClick={() => handleSelectedOption("home")}>
        <Link to="/user">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="options">
        <div
          className={`home ${selectedOption === "home" ? "active" : ""}`}
          onClick={() => handleSelectedOption("home")}
        >
          <Link to="/user">
            <AiFillHome />
          </Link>
        </div>
        <div
          className={`saved ${selectedOption === "saved" ? "active" : ""}`}
          onClick={() => handleSelectedOption("saved")}
        >
          <Link to="/saved-blogs">
            <FaRegClone />
          </Link>
        </div>
        <div
          className={`posted ${selectedOption === "posted" ? "active" : ""}`}
          onClick={() => handleSelectedOption("posted")}
        >
          <Link to="/posted-blogs">
            <FaRegFileAlt />
          </Link>
        </div>
        <div
          className={`write ${selectedOption === "write" ? "active" : ""}`}
          onClick={() => handleSelectedOption("write")}
        >
          <Link to="/create-blog">
            <FaRegEdit />
          </Link>
        </div>
      </div>
      <div className="user">
        <img src={avatar} alt="poster" />
      </div>
    </LeftSection>
  );
}
