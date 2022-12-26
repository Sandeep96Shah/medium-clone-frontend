import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "./styles";
import { createBlog, getUserDetails, getSignedUrl } from "../../action";

const Index = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState();
  const { user, createBlogFn, getUserDetailsFn, getSignedUrlFn } = props;

  const handleSubmitPost = () => {

    if (image) {
      const updatedData = {
        image,
        title,
        category,
        description,
        userId: user._id,
      };
      getSignedUrlFn({ updatedData, type: 'blog' });
    } else {
      const updatedData = {
        title,
        category,
        description,
        userId: user._id,
      };
      createBlogFn({ updatedData })
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      getUserDetailsFn();
    }
  }, []);
  return (
    <Container>
      <div className="title">
        <input
          type="text"
          name="title"
          placeholder="Title for your blog"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="category">
        <input
          type="text"
          name="category"
          placeholder="Category of your blog"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
      </div>
      <div className="blog-image">
        <input
          type="file"
          id="blog-poster"
          name="blog-poster"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div className="description">
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="20"
          placeholder="Write about your blog in details"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleSubmitPost}>POST</button>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { blogsDetails } = state || {};
  const { user } = blogsDetails || {};
  return {
    user,
  };
};

export default connect(mapStateToProps, {
  createBlogFn: createBlog,
  getUserDetailsFn: getUserDetails,
  getSignedUrlFn: getSignedUrl,
})(Index);
