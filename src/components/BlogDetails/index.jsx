import React from "react";
import { BlogDetails } from "./styles";
import Divider from "../Common/Divider";

export default function index(props) {
  const { details } = props | {};
  // console.log("props", props.details);
  const { id, date, title, category, description, estimated, brief, user, image } =
  props?.details || {};
  const { name, avatar } = user || {};
  return (
    <BlogDetails>
      <div className="user-info">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="info">
          <div className="name-follow">
            <p className="name">{name}</p>
            <p className="follow">Follow</p>
          </div>
          <div className="blog-time">
            <p className="time">{date}</p>
            <p className="read-time">{estimated}</p>
          </div>
        </div>
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
      <Divider />
      <div className="image">
        <img src={image} alt="blog-poster" />
      </div>
      <Divider />
      <div className="brief">
        <p>
          {brief}
        </p>
      </div>
      <Divider />
      <div className="content">
        <p>
         {description}
        </p>
      </div>
      <Divider />
    </BlogDetails>
  );
}
