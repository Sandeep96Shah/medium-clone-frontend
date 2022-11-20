import React from "react";
import { useLocation } from "react-router-dom";
import LeftSection from "../../components/UserLeftSection";
import RightSection from "../../components/UserRightSection";
import { Container, UserContainer } from "./styles";
import Blog from "../../components/Common/Blog";
import BottomSection from "../../components/UserBottomSection";
import BlogDetails from "../../components/BlogDetails";

export default function Index() {
  const location = useLocation();
  const { state } = location || {};
  const { details } = state || {};
  console.log("details111", details);
  return (
    <UserContainer>
      <LeftSection />
      <Container>
        <BlogDetails details={details} />
      </Container>
      <RightSection />
      <BottomSection />
    </UserContainer>
  );
}
