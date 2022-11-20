import React from "react";
import { Tabs } from "antd";
import LeftSection from "../../components/UserLeftSection";
import RightSection from "../../components/UserRightSection";
import { Container, UserContainer } from "./styles";
import Blog from "../../components/Common/Blog";
import BottomSection from "../../components/UserBottomSection";
import BlogDetails from "../../components/BlogDetails";

export default function index() {
  return (
    <UserContainer>
      <LeftSection />
      <Container>
        <BlogDetails />
      </Container>
      <RightSection />
      <BottomSection />
    </UserContainer>
  );
}
