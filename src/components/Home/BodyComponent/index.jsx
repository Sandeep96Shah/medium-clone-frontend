import React from "react";
import { BodyContainer } from "./styles";

export default function index() {
  localStorage.setItem('selectedOption', 'home');
  return (
    <BodyContainer>
      <div className="container">
        <div className="title">
          <p>Stay Curious.</p>
        </div>
        <div className="brief">
          <p>
            Discover stories, thinking and expertise from writers on any topic.
          </p>
        </div>
        <div className="start-reading">
          <p>Start reading</p>
        </div>
      </div>
    </BodyContainer>
  );
}
