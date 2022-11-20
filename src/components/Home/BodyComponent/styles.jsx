import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

export const BodyContainer = styled.div`
  background-color: #ffc017;
  height: 70vh;
  display: flex;
  align-items: center;
  padding-left: 4rem;
  .container {
    height: 75%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .title {
    font-size: 100px;
    font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
  }
  .title p {
    margin-bottom: 0px;
  }
  .brief p {
    font-size: 25px;
    width: 65%;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 24px;
    margin-bottom: 0px;
  }
  .start-reading p {
    border: 1px solid black;
    width: max-content;
    border-radius: 25px;
    font-size: 23px;
    font-weight: 400;
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 20px;
  }

  @media screen and (max-width: ${breakpoints.tablet}px) {
    padding-left: 2rem;
    .start-reading p {
        margin-top: 0px;
    }
  }
  @media screen and (max-width: ${breakpoints.mobileL}px) {
    padding-left: 1rem;
    .title {
      font-size: 70px;
    }
    .brief p {
      font-size: 20px;
      width: 90%;
    }
    .start-reading p {
      font-size: 20px;
      font-weight: 400;
      padding: 0.4rem 1rem;
    }
  }
`;
