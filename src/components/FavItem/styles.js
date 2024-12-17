import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;

    display: flex;
    justify-content: start;
    align-items: center;

    gap: 1.3rem;

    margin: 1.6rem 0;

    > img {
        width: 8rem;
        height: 8rem;
    }

    img,
    h3 {
        cursor: pointer;
        transition: filter 0.3s ease;
    }

    img:hover,
    h3:hover {
        filter: brightness(0.8);
    }

    > div {
        display: flex;
        flex-direction: column;

        > h3 {
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-family: Poppins;
            font-size: 2rem;
            font-style: normal;
            font-weight: 500;
        }

        > button {
            border: none;
            background: none;
            color: ${({theme}) => theme.COLORS.TOMATO_400};

            text-align: start;
            font-family: Roboto;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 19.2px */
        }

    }
`;
