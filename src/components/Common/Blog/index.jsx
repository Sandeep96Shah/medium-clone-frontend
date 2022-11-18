import React from "react";
import { PostContainer } from "./styles";
import avatar from "../../../assets/avatar.webp";
import fullstack from "../../../assets/fullstack.jpg";
import { FaRegBookmark } from "react-icons/fa";

export default function index() {
  return (
    <PostContainer>
      <div className="author">
        <div className="avatar">
          <img src={avatar} alt="profile-pic" />
        </div>
        <div className="name">
          <p>Sandeep Kumar Shah</p>
        </div>
        <div className="published-on">
          <p>Nov20</p>
        </div>
      </div>
      <div className="description-container">
        <div className="description">
          <div className="title">
            <p>FullStack Developer</p>
          </div>
          <div className="brief">
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>
        </div>
        <div className="post-image">
          <img src={fullstack} alt="blog" />
        </div>
      </div>
      <div className="post-info">
        <div className="category-estimated">
          <div className="category">
            <p>FullStack Developer</p>
          </div>
          <div className="estimated">
            <p>7 min read</p>
          </div>
        </div>
        <div className="save-list">
          <FaRegBookmark />
        </div>
      </div>
    </PostContainer>
  );
}
