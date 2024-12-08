import styled from 'styled-components';
import { SCREEN } from '../../styles/deviceBreakpoints';

export const Container = styled.footer`
    grid-area: footer;
    background-color: ${({theme}) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 7.7rem;

    padding: 2.4rem 12.2rem;
    gap: 8px;  

    > span {
        color: ${({theme}) => theme.COLORS.LIGHT_200};
        font-family: Roboto;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 22.4px */
        text-align: center;
    }

    @media (max-width: ${SCREEN.MD}) {
        padding: 3rem 2.7rem; 
    }
`;

export const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    white-space: nowrap;

    > h1 {
        font-family: Roboto;
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_700};
    }
    > svg {
        width: 30px;
        height: 30px;
        path {
            fill: ${({theme}) => theme.COLORS.LIGHT_700};

        }
    }

    @media (max-width: ${SCREEN.MD}) {
        gap: 6px;
        font-size: 1.6rem;
        svg {
            width: 18px;
            height: 18px;
        }
    }

`;