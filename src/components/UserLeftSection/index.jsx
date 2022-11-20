import React from "react";
import { Link } from "react-router-dom";
import { LeftSection } from "./styles";
import logo from "../../assets/user-logo.png";
import avatar from "../../assets/avatar.webp";
import { AiFillHome } from "react-icons/ai";
import { FaRegClone, FaRegEdit, FaRegFileAlt } from "react-icons/fa";

export default function index() {
  return (
    <LeftSection>
      <div className="logo">
        <Link to="/user">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="options">
        <div className="home active">
          <Link to="/user">
            <AiFillHome />
          </Link>
        </div>
        <div className="saved">
          <Link>
            <FaRegClone />
          </Link>
        </div>
        <div className="posted">
          <Link>
          <FaRegFileAlt />
          </Link>
        </div>
        <div className="write">
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
