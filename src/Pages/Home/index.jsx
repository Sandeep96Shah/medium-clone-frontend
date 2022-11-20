import React from "react";
import Header from "../../components/Home/HeaderComponent";
import BodyComponent from "../../components/Home/BodyComponent";
import Blog from "../../components/Common/Blog";
import { BlogContainer } from "./styles";
import { data } from "../../demo-data/index";

export default function index() {
  return (
    <div>
      <Header />
      <BodyComponent />
      <BlogContainer>
        {data?.map((blog) => (
          <Blog
          key={blog.id}
            id={blog.id}
            name={blog.name}
            date={blog.date}
            title={blog.title}
            category={blog.category}
            description={blog.description}
            estimated={blog.estimated}
            brief={blog.brief}
          />
        ))}
      </BlogContainer>
    </div>
  );
}
