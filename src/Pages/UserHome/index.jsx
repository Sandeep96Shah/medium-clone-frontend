import React from "react";
import { Tabs } from "antd";
import LeftSection from "../../components/UserLeftSection";
import RightSection from "../../components/UserRightSection";
import { Container, UserContainer } from "./styles";
import Blog from "../../components/Common/Blog";
import BottomSection from "../../components/UserBottomSection";
import { data } from "../../demo-data/index";

export default function index() {
  return (
    <UserContainer>
      <LeftSection />
      <Container>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="For You" key="1">
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
          <Tabs.TabPane tab="Following" key="2">
            {data.map((blog) => (
              <Blog
                id={blog.id}
                key={blog.id}
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
      <RightSection />
      <BottomSection />
    </UserContainer>
  );
}
