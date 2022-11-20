import React from "react";
import { useNavigate } from "react-router-dom";
import { PostContainer } from "./styles";
import avatar from "../../../assets/avatar.webp";
import fullstack from "../../../assets/fullstack.jpg";
import { FaRegBookmark } from "react-icons/fa";

export default function Index(props) {
  const { id, name, date, title, category, description, estimated, brief } =
    props || {};
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("props", props);
    navigate("/blog-details", { state: { details: props } });
  };
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
          <img src={fullstack} alt="blog" />
        </div>
      </div>
      <div className="post-info">
        <div className="category-estimated">
          <div className="category">
            <p>{category}</p>
          </div>
          <div className="estimated">
            <p>{estimated}</p>
          </div>
        </div>
        <div className="save-list">
          <FaRegBookmark />
        </div>
      </div>
    </PostContainer>
  );
}
