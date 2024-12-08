import { styled } from 'styled-components';
import { SCREEN } from '../../styles/deviceBreakpoints';

export const Container = styled.header`
    grid-area: header;

    height: 10.4rem;
    width: 100%;

    background-color: ${({theme}) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.2rem;

    padding: 2.4rem 12.2rem;
    
    .desktop {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2.4rem;
    }
    > img {
        width: 2.4rem;
        height: 2.4rem;
    }

    .mobile {
        display: none;
    }

    @media (max-width: ${SCREEN.MD}) {
        .desktop {
            display: none;
        }
        .mobile {
            display: block;
        }

        padding: 7.2rem 3.6rem 3.6rem;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    h1 {
        font-family: Roboto;
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    span {
        color: ${({theme}) => theme.COLORS.CAKE_200};

        font-family: Roboto;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 19.2px */

        display: none;
    }

    > img {
        width: 30px;
        height: 30px;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        white-space: nowrap;
    }
`;

export const Menu = styled.button`
    background: none;
    border: none;
    display: none;
    
    > svg {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        width: 3.2rem;
        height: 3.2rem;
    }

    @media (max-width: ${SCREEN.MD}) {
        display: block;
    }
`;