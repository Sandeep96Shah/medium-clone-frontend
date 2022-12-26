import React, { useState } from "react";
import { Tooltip, Dropdown, Menu, Modal } from "antd";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LeftSection } from "./styles";
import { AiFillHome } from "react-icons/ai";
import { FaRegClone, FaRegEdit, FaRegFileAlt } from "react-icons/fa";
import Update from "../../components/Form/update";

const Index = (props) => {
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
    localStorage.setItem("token", "");
    navigate("/");
  };

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
        <p onClick={showUpdateModal} className="dropdown-option">
          Profile
        </p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={handleLogout} className="dropdown-option">
          Logout
        </p>
      </Menu.Item>
    </Menu>
  );
  return (
    <LeftSection>
      <Modal
        title="Update"
        visible={isUpdate}
        onOk={handleUpdateOk}
        onCancel={handleUpdateCancel}
        footer={null}
      >
        <Update handleOk={handleUpdateOk} name={name} avatar={avatar} />
      </Modal>
      <div className="logo" onClick={() => handleSelectedOption("home")}>
        <Link to="/user">
          <img
            src="https://medium-blog-bucket.s3.ap-south-1.amazonaws.com/63a0279c36721ab595d78684/74eb45e0-8505-11ed-b264-bb71e2709c3e.jpeg"
            alt="Logo"
          />
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
      <Dropdown overlay={menu} placement="topRight">
        <div className="user">
          <img
            src={`https://medium-blog-bucket.s3.ap-south-1.amazonaws.com/${avatar}`}
            alt="poster"
          />
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
