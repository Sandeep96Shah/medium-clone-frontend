import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "./styles";
import { createBlog } from "../../action";
import { getUserDetails } from "../../action";

const Index = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [brief, setBrief] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { dispatch, user } = props;

  const resetFields = () => {
    setTitle("");
    setImage(null);
    setBrief("");
    setDescription("");
  };
  const handleSubmitPost = () => {
    // need to add check that all the fields are required

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("brief", brief);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("user", user._id);
    dispatch(createBlog({ formData, resetFields }));
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      dispatch(getUserDetails());
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
      <div className="brief">
        <textarea
          name="brief"
          id="brief"
          cols="30"
          rows="7"
          placeholder="Briefly Describe your blog"
          onChange={(e) => setBrief(e.target.value)}
        ></textarea>
      </div>
      <div className="description">
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="40"
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

export default connect(mapStateToProps)(Index);
