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

    > h1 {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 44.8px */
    }

    .favorites {
        display: flex;
        flex-direction: column;
    }

    ${DEVICE_BREAKPOINTS.LG} {
        .favorites {
            /*display: flex;
            flex-direction: row;
            justify-content: start;
            gap: 4.8rem;
            flex-wrap: wrap;*/

            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 1.6rem;
        }
    }
`;