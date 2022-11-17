import React from "react";
import Header from "../../components/Home/HeaderComponent";
import BodyComponent from "../../components/Home/BodyComponent";
import Blog from "../../components/Common/Blog";
import { BlogContainer } from "./styles";

export default function index() {
  return (
    <div>
      <Header />
      <BodyComponent />
      <BlogContainer>
        <Blog />
        <Blog />
        <Blog />
      </BlogContainer>
    </div>
  );
}
