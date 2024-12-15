import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

import chevronDown from '../../assets/chevron-down.svg'

export const Container = styled.div`
    max-width: 100%;
    height: 100%;
    min-height: 100vh;

    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas:
    "header"
    "content"
    "footer";

    ${DEVICE_BREAKPOINTS.LG} {
        grid-template-rows: 9.6rem auto 7.7rem
    }
`;

export const Content = styled.section`
    min-height: 100%;
    max-width: 100%;

    grid-area: content;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    padding: 1rem 5rem 3.2rem;

    a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;

        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 1.6REM;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 33.6px */

        img {
            width: 2.2rem;
            height: 2.2rem;
        }
    }

    > h1 {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 44.8px */
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    * ::file-selector-button {
        display: none;
    }

    * ::-webkit-file-upload-button {
        display: none;
    }

    .hidden {
        display: none;
    }

    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        > label {
            background: ${({theme}) => theme.COLORS.DARK_800};
            height: 4.8rem;
            width: 100%;
            padding: 1.2rem 3.2rem;
            border-radius: 8px;

            display: flex;
            align-items: center;
            gap: .8rem;


            > span {
                color: ${({theme}) => theme.COLORS.LIGHT_100};
                text-align: center;
                font-family: Poppins;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px; /* 171.429% */
            }
        }

        > span {
            color: ${({theme}) => theme.COLORS.LIGHT_400};
            font-family: Roboto;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 16px */
        }
    }

    .categories {
        background-color: ${({theme}) => theme.COLORS.DARK_800};
        appearance: none;
        -webkit-appearance: none; /* Para o Safari */
        -moz-appearance: none; /* Para o Firefox */
        
        height: 4.8rem;
        width: 100%;
        padding: 1.2rem 3.2rem;
        border: none;
        border-radius: 8px;


        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-family: Roboto;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 22.4px */
        
        cursor: pointer;

        background-image: url(${chevronDown});
        background-repeat: no-repeat;
        background-size: 2.4rem;
        background-position: bottom 50% right 1.6rem;
    }

    .categories::after {
        content: "V"
    }
`;