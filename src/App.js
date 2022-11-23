import styled from "styled-components";
import Home from "./Pages/Home";
import UserHome from "./Pages/UserHome";
import BlogDetails from "./Pages/BlogDetails";
import CreateBlog from "./Pages/CreateBlog";
import { Routes, Route, useLocation } from "react-router-dom";
import LeftSection from "./components/UserLeftSection";
import RightSection from "./components/UserRightSection";
import BottomSection from "./components/UserBottomSection";
import SavedBlogs from './Pages/SavedBlogs';
import PostedBlogs from './Pages/PostedBlogs';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const App = () => {
  const location = useLocation();
  console.log("pathName", location.pathname);
  const isLayout = location.pathname !== "/";
  return (
    <>
    <NotificationContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <UserContainer>
        {isLayout && <LeftSection />}
        <Routes>
          <Route exact path="/user" element={<UserHome />} />
          <Route exact path="/blog-details/:id" element={<BlogDetails />} />
          <Route exact path="/create-blog" element={<CreateBlog />} />
          <Route exact path="/saved-blogs" element={<SavedBlogs />} />
          <Route exact path="/posted-blogs" element={<PostedBlogs />} />
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
