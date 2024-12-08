import styled from "styled-components";

export const Container = styled.button`
    max-width: 100%;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    display: flex;
    border: none;
    border-radius: 5px;

    padding: 1.2rem 3.2rem;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    text-align: center;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    /* Poppins/100-medium */
    font-family: Poppins;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem; /* 171.429% */
`;