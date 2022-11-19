import React from "react";
import { AiFillHome } from "react-icons/ai";
import avatar from "../../assets/avatar.webp";
import { FaRegClone } from "react-icons/fa";
import { Container } from "./styles";

export default function index() {
  return (
    <Container>
      <div className="home">
        <AiFillHome />
      </div>
      <div className="savedLists">
        <FaRegClone />
      </div>
      <div className="user">
        <img src={avatar} alt="poster" />
      </div>
    </Container>
  );
}
