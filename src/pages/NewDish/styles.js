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
        grid-template-rows: 9.6rem auto 7.7rem;
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
        font-size: 1.6rem;
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

    ${DEVICE_BREAKPOINTS.LG} {
        padding: 4rem 11.6rem 12.5rem;

        a {
            font-size: 2.4rem;
            font-weight: 700;

            img {
                width: 3.2rem;
                height: 3.2rem;
            }
        }
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

    .input-image {
        cursor: pointer;
    }
    
    > .input-wrapper,
    > .input-row {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
    > div {
        width: 100%;
        
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        > span {
            color: ${({theme}) => theme.COLORS.LIGHT_400};
            font-family: Roboto;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 16px */
        }

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
    }
    }
    

    .ingredients {
        padding: .8rem;
        background: ${({theme}) => theme.COLORS.DARK_800};
        border-radius: 8px;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: start;
        gap: 1.6rem;

    }

    .textArea {
        height: 17.2rem;
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

    .button {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    ${DEVICE_BREAKPOINTS.LG} {
        width: 100%;
        gap: 3.2rem;
        

        .input-row {
            width: 100%;
            flex-direction: row;
            gap: 3.2rem;

            .image {
                width: 60%;
            }

            .name {
                width: 110%;
            }

            .categories-wrapper {
                width: 80%;
            }

            .ingredients-wrapper {
                width: 280%;
            }
        }

        .input-wrapper {
            gap: 3.2rem;
            align-items: end;

        }

        .input-wrapper > :nth-child(2){
            max-width: 20rem;

        }

        .input-row,
        .input-wrapper {
            > div {
                > span {

                }
            }
        }

    }
`;