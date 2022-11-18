import styled from "styled-components";
import { breakpoints } from '../../utils/breakpoints';

export const RightSection = styled.div`
  width: 23vw;
  height: 97vh;
  border-left: 1px solid #d7d3d3;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 1rem;
  .content p {
    font-size: 20px;
    color: grey;
    font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times,
      serif;
    font-size: 16px;
  }
  @media screen and (max-width: ${breakpoints.laptop}px) {
    display: none;
  }
`;
