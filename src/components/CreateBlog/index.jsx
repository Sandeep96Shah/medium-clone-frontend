import React from "react";
import { Container } from "./styles";

export default function index() {
  return (
    <Container>
      <div className="title">
        <input
          type="text"
          name="title"
          placeholder="Title for your blog"
        />
      </div>
      <div className="blog-image">
        <input type="file" id="blog-poster" name="blog-poster" />
      </div>
      <div className="brief">
        <textarea
          name="brief"
          id="brief"
          cols="30"
          rows="7"
          placeholder="Briefly Describe your blog"
        ></textarea>
      </div>
      <div className="description">
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="40"
          placeholder="Write about your blog in details"
        ></textarea>
      </div>
    </Container>
  );
}
