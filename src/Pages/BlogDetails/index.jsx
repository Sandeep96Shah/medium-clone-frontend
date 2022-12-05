import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./styles";
import BlogDetails from "../../components/BlogDetails";

export default function Index() {
  const location = useLocation();
  const { state } = location || {};
  const { details } = state || {};
  return (
    <Container>
      <BlogDetails details={details} />
    </Container>
  );
}
