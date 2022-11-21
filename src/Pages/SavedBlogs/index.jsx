import React from "react";
import { Tabs } from "antd";
import { Container } from "./styles";
import Blog from "../../components/Common/Blog";
import { data } from "../../demo-data/index";

export default function index() {
  return (
      <Container>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Saved Blogs" key="1">
            {data.map((blog) => (
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
          </Tabs.TabPane>
        </Tabs>
      </Container>
  );
}
