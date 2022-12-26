import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { BlogDetails } from "./styles";
import Divider from "../Common/Divider";
import { getBlogDetails } from "../../action";
import moment from "moment";

const Index = (props) => {
  const { blogDetails, getBlogDetailsFn } = props || {};
  const {
    title,
    description,
    blogImage,
    category,
    estimated = 2,
    user,
    createdAt,
  } = blogDetails || {};
  const { name, avatar } = user || {};
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const { pathname } = location;
      const blogId = pathname.substring(pathname.lastIndexOf("/") + 1);
      getBlogDetailsFn({ id: blogId })
    }
  }, []);
  return (
    <BlogDetails>
      <div className="user-info">
        <div className="avatar">
          <img
            src={`https://medium-blog-bucket.s3.ap-south-1.amazonaws.com/${avatar}`}
            alt="avatar"
          />
        </div>
        <div className="info">
          <div className="name-follow">
            <p className="name">{name}</p>
            {/* <p className="follow">Follow</p> */}
          </div>
          <div className="blog-time">
            <p className="time">{moment(createdAt).format("Do MMM YY")}</p>
            <p className="read-time">{estimated}</p>
          </div>
        </div>
      </div>
      <div className="category">
        <p>{category}</p>
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
      <Divider />
      {blogImage ? (
        <>
          <div className="image">
            <img
              src={`https://medium-blog-bucket.s3.ap-south-1.amazonaws.com/${blogImage}`}
              alt="blog-poster"
            />
          </div>
          <Divider />
        </>
      ) : null}
      <div className="content">
        <p>{description}</p>
      </div>
    </BlogDetails>
  );
};

const mapStateToProps = (state) => {
  const { blogsDetails } = state || {};
  const { blogDetails } = blogsDetails || {};
  return { blogDetails };
};

export default connect(mapStateToProps, {
  getBlogDetailsFn: getBlogDetails,
})(Index);
