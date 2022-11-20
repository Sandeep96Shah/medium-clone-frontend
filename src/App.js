import styled from "styled-components";
import Home from "./Pages/Home";
import UserHome from "./Pages/UserHome";
import BlogDetails from "./Pages/BlogDetails";
import CreateBlog from "./Pages/CreateBlog";
import { Routes, Route, useLocation } from "react-router-dom";
import LeftSection from "./components/UserLeftSection";
import RightSection from "./components/UserRightSection";
import BottomSection from "./components/UserBottomSection";

const App = () => {
  const location = useLocation();
  console.log("pathName", location.pathname);
  const isLayout = location.pathname !== "/";
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <UserContainer>
        {isLayout && <LeftSection />}
        <Routes>
          <Route exact path="/user" element={<UserHome />} />
          <Route exact path="/blog-details" element={<BlogDetails />} />
          <Route exact path="/create-blog" element={<CreateBlog />} />
        </Routes>
        {isLayout && <RightSection />}
        {isLayout && <BottomSection />}
      </UserContainer>
    </>
  );
};

export const UserContainer = styled.div`
  display: flex;
`;

export default App;
