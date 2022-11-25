import React, { useState } from "react";
import { Tooltip, Dropdown, Space, Menu } from "antd";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LeftSection } from "./styles";
import logo from "../../assets/user-logo.png";
import { AiFillHome } from "react-icons/ai";
import { FaRegClone, FaRegEdit, FaRegFileAlt } from "react-icons/fa";

const Index = (props) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("selectedOption")
  );
  const handleSelectedOption = (val) => {
    setSelectedOption(val);
    localStorage.setItem("selectedOption", val);
  };
  const { avatar } = props?.user || {};

  const handleLogout = () => {
    localStorage.setItem('token', '');
    navigate('/');
  }

  const menu = (
    <Menu>
      <Menu.Item>
       <p>Profile</p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={handleLogout}>Logout</p>
      </Menu.Item>
    </Menu>
  );
  return (
    <LeftSection>
      <div className="logo" onClick={() => handleSelectedOption("home")}>
        <Link to="/user">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="options">
        <Tooltip title="Home" placement="right">
          <div
            className={`home ${selectedOption === "home" ? "active" : ""}`}
            onClick={() => handleSelectedOption("home")}
          >
            <Link to="/user">
              <AiFillHome />
            </Link>
          </div>
        </Tooltip>
        <Tooltip title="Saved Posts" placement="right">
          <div
            className={`saved ${selectedOption === "saved" ? "active" : ""}`}
            onClick={() => handleSelectedOption("saved")}
          >
            <Link to="/saved-blogs">
              <FaRegClone />
            </Link>
          </div>
        </Tooltip>
        <Tooltip title="Posted Blogs" placement="right">
          <div
            className={`posted ${selectedOption === "posted" ? "active" : ""}`}
            onClick={() => handleSelectedOption("posted")}
          >
            <Link to="/posted-blogs">
              <FaRegFileAlt />
            </Link>
          </div>
        </Tooltip>
        <Tooltip title="Write Post" placement="right">
          <div
            className={`write ${selectedOption === "write" ? "active" : ""}`}
            onClick={() => handleSelectedOption("write")}
          >
            <Link to="/create-blog">
              <FaRegEdit />
            </Link>
          </div>
        </Tooltip>
      </div>
      <Dropdown
        overlay={menu}
        placement="topRight"
      >
        <div className="user">
          <img src={avatar} alt="poster" />
        </div>
      </Dropdown>
    </LeftSection>
  );
};

const mapStateToProps = (state) => {
  const { blogsDetails } = state || {};
  const { user } = blogsDetails || {};
  return {
    user,
  };
};

export default connect(mapStateToProps)(Index);
