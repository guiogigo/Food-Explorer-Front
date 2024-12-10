import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    justify-content: space-between;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Profile = styled.div`
    margin: 5.6rem 0 7rem 6.75rem;
    display: flex;
    flex: 0.5;
    justify-content: center;
    align-items: center;
    gap: 10px;

    white-space: nowrap;

    > h1 {
        font-family: Roboto;
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    > img {
        width: 3rem;
        height: 3rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin: 9.8rem 4rem 4.5rem;
        max-height: 44px;
    }

`;

export const Form = styled.form`
    max-width: 30rem;
    margin: 5.6rem 6.75rem 7rem 0;
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    border-radius: 1rem;
    padding: 4rem;
    gap: 2rem;
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;


    > h1 {
        text-align: center;
        /* Poppins/400-medium */
        font-family: Poppins;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 44.8px */
    }

    > div {
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        > span {
            color: ${({theme}) => theme.COLORS.LIGHT_400};
            /* Roboto/Small regular */
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 16px */
        }

    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 100%;
        margin: 0;
        padding: 0 2.9rem;
        background: none;
        justify-content: start;

        > h1 {
            display: none;
        }
    }

    
`;