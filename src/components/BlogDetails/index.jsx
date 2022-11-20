import React from "react";
import { BlogDetails } from "./styles";
import avatar from "../../assets/avatar.webp";
import Divider from "../Common/Divider";

export default function index() {
  return (
    <BlogDetails>
      <div className="user-info">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="info">
          <div className="name-follow">
            <p className="name">Sandeep Kumar Shah</p>
            <p className="follow">Follow</p>
          </div>
          <div className="blog-time">
            <p className="time">21 Sept</p>
            <p className="read-time">3 min read</p>
          </div>
        </div>
      </div>
      <div className="title">
        <p>FullStack Developer</p>
      </div>
      <Divider />
      <div className="image">
        <img src={avatar} alt="blog-poster" />
      </div>
      <Divider />
      <div className="brief">
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. In publishing
          and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available.
        </p>
      </div>
      <Divider />
      <div className="content">
        <p>
          {" "}
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. In publishing
          and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available. In publishing and graphic
          design, Lorem ipsum is a placeholder text commonly used to demonstrate
          the visual form of a document or a typeface without relying on
          meaningful content. Lorem ipsum may be used as a placeholder before
          final copy is available. In publishing and graphic design, Lorem ipsum
          is a placeholder text commonly used to demonstrate the visual form of
          a document or a typeface without relying on meaningful content. Lorem
          ipsum may be used as a placeholder before final copy is available. In
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. In publishing
          and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available. In publishing and graphic
          design, Lorem ipsum is a placeholder text commonly used to demonstrate
          the visual form of a document or a typeface without relying on
          meaningful content. Lorem ipsum may be used as a placeholder before
          final copy is available. In publishing and graphic design, Lorem ipsum
          is a placeholder text commonly used to demonstrate the visual form of
          a document or a typeface without relying on meaningful content. Lorem
          ipsum may be used as a placeholder before final copy is available. In
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. In publishing
          and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available. In publishing and graphic
          design, Lorem ipsum is a placeholder text commonly used to demonstrate
          the visual form of a document or a typeface without relying on
          meaningful content. Lorem ipsum may be used as a placeholder before
          final copy is available. In publishing and graphic design, Lorem ipsum
          is a placeholder text commonly used to demonstrate the visual form of
          a document or a typeface without relying on meaningful content. Lorem
          ipsum may be used as a placeholder before final copy is available. In
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. In publishing
          and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available.
        </p>
      </div>
      <Divider />
    </BlogDetails>
  );
}
