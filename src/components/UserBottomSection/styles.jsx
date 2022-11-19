import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export const Container = styled.div`
    display: none;
    height: 50px;
    bottom: 0px;
    position: fixed;
    width: 100%;
    background-color: white;
    justify-content: space-around;
    align-items: center;
    .user {
        height: 30px;
        width: 30px;
        img {
            width: 90%;
            height: 90%;
            border-radius: 50%;
            object-fit: fill;
        }
      }
      div {
        font-size: 20px;
      }
    @media screen and (max-width: ${breakpoints.laptop}px) {
        display: flex;
      }
`;