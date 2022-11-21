import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export const LeftSection = styled.div`
  height: 97vh;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid #d7d3d3;
  position: sticky;
  padding-bottom: 1rem;
  top: 0;
  .logo {
    display: flex;
    justify-content: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 60%;
      height: 100px;
      object-fit: contain;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 1px 7px 6px -7px black;
  }
  .options {
    height: 55%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    div {
      width: 80%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }
  }
  .options div:hover {
    border-radius: 10px;
    border: 1px solid lightblue;
    cursor: pointer;
  }

  .user {
    height: 40px;
    width: 40px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: fill;
    }
  }
  a {
    color: grey;
  }

  @media screen and (max-width: ${breakpoints.laptop}px) {
    display: none;
  }
`;
