import styled from "styled-components";

export const Container = styled.button`
    max-width: 100%;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    display: flex;
    border: none;
    border-radius: 5px;

    padding: 0.75rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    text-align: center;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    /* Poppins/100-medium */
    font-family: Poppins;
    font-size: 0.87rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 171.429% */
`;