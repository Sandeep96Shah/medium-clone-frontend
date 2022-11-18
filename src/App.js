import Home from "./Pages/Home";
import UserHome from './Pages/UserHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
