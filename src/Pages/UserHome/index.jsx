import React from "react";
import { Tabs } from "antd";
import LeftSection from "../../components/UserLeftSection";
import RightSection from "../../components/UserRightSection";
import { Container, UserContainer } from "./styles";
import Blog from '../../components/Common/Blog';
import BottomSection from '../../components/UserBottomSection';

export default function index() {
  return (
    <UserContainer>
      <LeftSection />
      <Container>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="For You" key="1">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Following" key="2">
          <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </Tabs.TabPane>
        </Tabs>
      </Container>
      <RightSection />
      <BottomSection />
    </UserContainer>
  );
}
