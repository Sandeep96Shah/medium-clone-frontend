import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import logo from "../../../assets/logo.png";
import SignIn from "../../Form/signin";
import SignUp from "../../Form/signup";
import { HeaderContainer } from "./styles";

export default function Header() {
  const [isWhiteBGColor, setIsWhiteBGColor] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const changeBGColor = () => {
    if (window.scrollY >= 410) {
      setIsWhiteBGColor(true);
    } else {
      setIsWhiteBGColor(false);
    }
  };

  useEffect(() => {
    changeBGColor();
    window.addEventListener("scroll", changeBGColor);
  });

  // signUp modal methods
  const showSignUpModal = () => {
    setIsSignUp(true);
  };
  const handleSignUpOk = () => {
    setIsSignUp(false);
  };
  const handleSignUpCancel = () => {
    setIsSignUp(false);
  };

  // signIn modal methods
  const showSignInModal = () => {
    setIsSignIn(true);
  };
  const handleSignInOk = () => {
    setIsSignIn(false);
  };
  const handleSignInCancel = () => {
    setIsSignIn(false);
  };
  return (
    <>
      <HeaderContainer isWhiteBGColor={isWhiteBGColor}>
        <Modal
          title="SignUp Form"
          visible={isSignUp}
          onOk={handleSignUpOk}
          onCancel={handleSignUpCancel}
          footer={null}
          width={400}
        >
          <SignUp handleOk={handleSignUpOk} showSignInModal={showSignInModal} />
        </Modal>
        <Modal
          title="SignIn Form"
          visible={isSignIn}
          onOk={handleSignInOk}
          onCancel={handleSignInCancel}
          footer={null}
          width={400}
        >
          <SignIn handleOk={handleSignInOk} showSignUpModal={showSignUpModal} />
        </Modal>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="get-started-container">
          <div className="sign-in" onClick={showSignInModal}>
            <p>SignIn</p>
          </div>
          <div className="get-started" onClick={showSignUpModal}>
            <p>Get Started</p>
          </div>
        </div>
      </HeaderContainer>
    </>
  );
}
