import React from "react";
import LeftSection from "../../components/UserLeftSection";
import RightSection from "../../components/UserRightSection";
import { Container, UserContainer } from "./styles";
import BottomSection from "../../components/UserBottomSection";
import CreateBlog from '../../components/CreateBlog';

export default function index() {
  return (
    <UserContainer>
      <LeftSection />
      <Container>
        <CreateBlog />
      </Container>
      <RightSection />
      <BottomSection />
    </UserContainer>
  );
}
