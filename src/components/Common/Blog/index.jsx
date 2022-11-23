import React from "react";
import { connect } from "react-redux";
import { Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { PostContainer } from "./styles";
import { FaRegBookmark } from "react-icons/fa";
import { saveBlogRequest } from '../../../action';

const Index = (props) => {
  const {
    id,
    date,
    title,
    category,
    description,
    estimated,
    brief,
    image,
    user,
    saveBlogRequestFn,
  } = props || {};
  const { name, avatar } = user || {};
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("props", props);
    navigate("/blog-details", { state: { details: props } });
  };

  const handleSaveBlog = () => {
    saveBlogRequestFn({ userId: user._id , blogId: id })
  }
  return (
    <PostContainer>
      <div className="author">
        <div className="avatar">
          <img src={avatar} alt="profile-pic" />
        </div>
        <div className="name">
          <p>{name}</p>
        </div>
        <div className="published-on">
          <p>{date}</p>
        </div>
      </div>
      <div className="description-container" onClick={handleClick}>
        <div className="description">
          <div className="title">
            <p>{title}</p>
          </div>
          <div className="brief">
            <p>{brief}</p>
          </div>
        </div>
        <div className="post-image">
          <img src={image} alt="blog" />
        </div>
      </div>
      <div className="post-info">
        <div className="category-estimated">
          <div className="category">
            <p>{category}</p>
          </div>
          <div className="estimated">
            <p>{estimated}min Read</p>
          </div>
        </div>
        <Tooltip title="Save Post">
          <div className="save-list" onClick={handleSaveBlog}>
            <FaRegBookmark />
          </div>
        </Tooltip>
      </div>
    </PostContainer>
  );
}

export default connect(null, {saveBlogRequestFn: saveBlogRequest})(Index);