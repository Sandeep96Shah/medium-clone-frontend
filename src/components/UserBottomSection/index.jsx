import React, { useState } from "react";
import { Tooltip, Menu, Dropdown, Modal } from "antd";
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaRegClone } from "react-icons/fa";
import { Container } from "./styles";
import Update from "../../components/Form/update";

const Index =  (props) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("selectedOption")
  );
  const [isUpdate, setIsUpdate] = useState(false);
  const handleSelectedOption = (val) => {
    setSelectedOption(val);
    localStorage.setItem("selectedOption", val);
  };
  const { avatar, name } = props?.user || {};

  const handleLogout = () => {
    localStorage.setItem('token', null);
    navigate('/');
  }

  // update modal methods
  const showUpdateModal = () => {
    setIsUpdate(true);
  };
  const handleUpdateOk = () => {
    setIsUpdate(false);
  };
  const handleUpdateCancel = () => {
    setIsUpdate(false);
  };

  const menu = (
    <Menu>
      <Menu.Item>
      <p onClick={showUpdateModal} className="dropdown-option">Profile</p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={handleLogout} className="dropdown-option">Logout</p>
      </Menu.Item>
    </Menu>
  );

  return (
    <Container>
       <Modal
        title="Update"
        visible={isUpdate}
        onOk={handleUpdateOk}
        onCancel={handleUpdateCancel}
        footer={null}
      >
        <Update handleOk={handleUpdateOk} name={name} avatar={avatar} />
      </Modal>
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
          <img src={`https://medium-blog-bucket.s3.ap-south-1.amazonaws.com/${avatar}`} alt="poster" />
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
