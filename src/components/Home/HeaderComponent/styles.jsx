import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 0 4rem;
  background-color: ${({isWhiteBGColor}) => isWhiteBGColor ? 'white' : '#FFC017'};
  transition: background-color 0.5s ease;
  .logo {
    height: 60%;
    img {
      height: 100%;
    }
  }
  .get-started-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .sign-in p {
    cursor: pointer;
  }
 
  .get-started p {
    border: 1px solid black;
    padding: 6px 15px;
    border-radius: 30px;
    background-color: ${({isWhiteBGColor}) =>  isWhiteBGColor ? '#1da31d' : 'black'};
    color: white;
    font-weight: 400;
    cursor: pointer;
  }
 
  @media screen and (max-width: ${breakpoints.tablet}px ) {
    padding: 0 2rem;
  }

   @media screen and (max-width: ${breakpoints.mobileL}px ) {
    padding: 0 1rem;
    .sign-in {
        display: none;
    }
  }
`;
