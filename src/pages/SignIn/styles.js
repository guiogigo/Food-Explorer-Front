import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'


export const Container = styled.div`
    max-width: 100%;
    height: 100%;
    min-height: 100vh; 

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7.2rem;

    a {
        text-decoration: none;
        background: none;
        border: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        text-align: center;
        /* Poppins/100-medium */
        font-family: Poppins;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.4rem; /* 171.429% */
    }

    ${DEVICE_BREAKPOINTS.LG} {

        flex-direction: row;
        justify-content: space-evenly;
        gap: 0;
    }

`;

export const Profile = styled.div`
        padding-top: 12.8rem; 

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        > img {
            width: 3.2rem;
            height: 3.2rem;
        }

        > h1 {
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-family: Roboto;
            font-size: 3.2rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        ${DEVICE_BREAKPOINTS.LG} {
            min-width: 25%;
            padding: 0;
            margin-bottom: 7rem;

            > h1 {
                font-size: 4.2rem;
            }

            > img {
                width: 4.2rem;
                height: 4.2rem;
            }
        }   
`;

export const Form = styled.form`
    .desktop {
        display: none;
    }
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 0 4.7rem;

    > div {
        display: flex;
        flex-direction: column;
        gap: .8rem;

        > span {
            color: ${({theme}) => theme.COLORS.LIGHT_400};
    
            font-family: Roboto;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
    
        }
    }

    ${DEVICE_BREAKPOINTS.LG} {
        padding: 6.4rem;
        background-color: ${({theme}) => theme.COLORS.DARK_700};
        border-radius: 1.6rem;

        max-width: 47.6rem;

        .desktop {
            display: initial;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            text-align: start;

            font-family: Poppins;
            font-size: 3.2rem;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
        }


            
    }   
`;