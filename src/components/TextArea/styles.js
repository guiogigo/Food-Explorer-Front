import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 100%;

    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border: none;
    resize: none;
    border-radius: 8px;

    padding: 1.4rem;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: Roboto;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; 

    &::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
`;