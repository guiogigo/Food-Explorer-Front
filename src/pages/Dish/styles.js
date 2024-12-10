import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;

    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas:
    "header"
    "content"
    "footer";
    

    
`;

export const Content = styled.section`
    grid-area: content;
    padding-block: 1.6rem;
    margin-inline: clamp(1rem, 8vw, 8rem);

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;


        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 33.6px */

        img {
            width: 3.2rem;
            height: 3.2rem;
            
        }
    }

    .dish-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.6rem;
    }

    .dish-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 26.4rem;
        height: 26.4rem;

        img {
            width: 100%;
            height: 100%;
            aspect-ratio: 1 / 1;
        }

    }
    
    .dish-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.4rem;

        color: ${({theme}) => theme.COLORS.LIGHT_300};
        text-align: center;
        font-family: Poppins;
        font-style: normal;
        
        > h3 {
            
            line-height: 140%; 
            font-size: 2.7rem;
            font-weight: 500;
        }

        > p {
            line-height: 140%; 
            font-size: 1.6rem;
            font-weight: 200;

        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 2.4rem;

            margin-bottom: 2.4rem;
        }

    }

    ${DEVICE_BREAKPOINTS.LG} {
        padding: 0;
        margin: 2.4rem 12.2rem;
        gap: 4.2rem;

        .dish-wrapper {
            flex-direction: row;
            gap: 5rem;
        }

        .dish-preview {
            min-width: 39rem;
            min-height: 39rem;
        }

        .dish-info {
            align-items: start;
            text-align: left;

            > h3 {
                font-size: 3rem;
            }

            > p {
                font-size: 1.6rem;
            }
        }
        

    }
`;