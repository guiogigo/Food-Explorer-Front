import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: 3.2rem;

    white-space: nowrap;

    padding: .4rem .8rem;
    background: ${({theme}) => theme.COLORS.DARK_1000};
    border-radius: .5rem;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    text-align: center;

    font-family: Poppins;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
`;