import React, {useState, useEffect} from "react";
import logo from "../../../assets/logo.png";
import { HeaderContainer } from "./styles";

export default function Header() {
  const [isWhiteBGColor, setIsWhiteBGColor] = useState(false);
  const changeBGColor = () => {
    if (window.scrollY >= 410) {
      setIsWhiteBGColor(true)
    } else {
      setIsWhiteBGColor(false)
    }
  }

  useEffect(() => {
    changeBGColor();
    window.addEventListener("scroll", changeBGColor)
  })
  return (
    <HeaderContainer isWhiteBGColor={isWhiteBGColor}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="get-started-container">
        <div className="sign-in">
          <p>SignIn</p>
        </div>
        <div className="get-started">
          <p>Get Started</p>
        </div>
      </div>
    </HeaderContainer>
  );
}

