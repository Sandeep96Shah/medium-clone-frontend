import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const Container = styled.div`
    padding: 1rem 2rem;
    width: 70%;
    @media screen and (max-width: ${breakpoints.laptop}px) {
       width: 100%;
      }
`;

export const UserContainer = styled.div`
    display: flex;
`;