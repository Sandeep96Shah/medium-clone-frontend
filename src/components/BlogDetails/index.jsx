import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { BlogDetails } from "./styles";
import Divider from "../Common/Divider";
import { getBlogDetails } from '../../action';

const Index = (props) => {
  const { blogDetails } = props || {};
  const { title, brief, description, image, category, estimated, user } = blogDetails || {};
  const { name, avatar } = user || {}
  const location = useLocation();
  
  useEffect(() => {
  const { pathname } = location;
  const blogId = pathname.substring(pathname.lastIndexOf('/') + 1);
    props.dispatch(getBlogDetails({id: blogId}));
  },[])
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
            <p className="time">27 Oct, 2022</p>
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

const mapStateToProps = (state) => {
  const { blogsDetails } = state || {};
  const { blogDetails } = blogsDetails || {};
  return  {blogDetails};
}

export default connect(mapStateToProps)(Index);
