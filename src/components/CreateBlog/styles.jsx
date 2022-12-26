import styled from "styled-components";

export const Container = styled.div`
padding: 3rem 1rem;
.title {
  margin-bottom: 30px;
}
.category{
  margin-bottom: 30px;
}
.blog-image {
  margin-bottom: 30px;
  width: 100%;
}
  input {
    padding: 1rem;
    font-size: 30px;
    font-weight: 500;
    width: 100%;
    outline: none;
    border: 1px solid grey;
  }
  textarea {
    width: 100%;
    font-size: 20px;
    line-height: 1.4;
    padding: 1rem;
    outline: none;
  }
  .brief {
    margin-bottom: 40px;
  }
  button {
    padding: 8px 12px;
    font-size: 25px;
    color: blue;
    margin-top: 10px;
    cursor:pointer;
  }
`;
