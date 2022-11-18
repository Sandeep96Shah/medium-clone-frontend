import React from "react";
import { LeftSection } from "./styles";
import logo from "../../assets/user-logo.png";
import avatar from "../../assets/avatar.webp";
import { AiFillHome } from "react-icons/ai";
import { FaRegClone, FaRegEdit, FaRegFileAlt } from "react-icons/fa";

export default function index() {
  return (
    <LeftSection>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="options">
        <div className="home active">
        <AiFillHome />
        </div>
        <div className="saved">
          <FaRegClone />
        </div>
        <div className="posted">
          <FaRegFileAlt />
        </div>
        <div className="write">
          <FaRegEdit />
        </div>
      </div>
      <div className="user">
        <img src={avatar} alt="poster" />
      </div>
    </LeftSection>
  );
}
