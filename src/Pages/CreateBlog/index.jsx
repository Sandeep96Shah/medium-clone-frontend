import React from "react";
import { Container } from "./styles";
import CreateBlog from '../../components/CreateBlog';

export default function index() {
  return (
      <Container>
        <CreateBlog />
      </Container>
  );
}
