import Home from "./Pages/Home";
import UserHome from './Pages/UserHome';
import BlogDetails from './Pages/BlogDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<UserHome />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
