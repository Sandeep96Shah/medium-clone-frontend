import styled from "styled-components";
import { breakpoints } from "./utils/breakpoints";

export const BlogContainer = styled.div`
    padding: 2rem 7rem;
    
    @media screen and (max-width: ${breakpoints.tablet}px) {
        padding: 2rem 3rem;
    }
`;