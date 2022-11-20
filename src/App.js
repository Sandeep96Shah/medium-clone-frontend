import Home from "./Pages/Home";
import UserHome from './Pages/UserHome';
import BlogDetails from './Pages/BlogDetails';
import CreateBlog from './Pages/CreateBlog';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<UserHome />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/create-blog" element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
