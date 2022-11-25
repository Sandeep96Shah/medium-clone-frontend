import React, { useState } from "react";
import { Tooltip, Menu, Dropdown } from "antd";
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaRegClone } from "react-icons/fa";
import { Container } from "./styles";

const Index =  (props) => {
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
    localStorage.setItem('token', null);
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
    <Container>
      <Tooltip title="Home">
        <div
          className={`home ${selectedOption === "home" ? "active" : ""}`}
          onClick={() => handleSelectedOption("home")}
        >
          <Link to="/user">
            <AiFillHome />
          </Link>
        </div>
      </Tooltip>
      <Tooltip title="Saved Posts">
        <div
          className={`savedLists ${selectedOption === "saved" ? "active" : ""}`}
          onClick={() => handleSelectedOption("saved")}
        >
          <Link to="/saved-blogs">
            <FaRegClone />
          </Link>
        </div>
      </Tooltip>
      <Dropdown
        overlay={menu}
        placement="topRight"
      >
        <div className="user">
          <img src={avatar} alt="poster" />
        </div>
      </Dropdown>
    </Container>
  );
}

const mapStateToProps = (state) => {
  const { blogsDetails } = state || {};
  const { user } = blogsDetails || {};
  return {
    user,
  }
}

export default connect(mapStateToProps)(Index);
