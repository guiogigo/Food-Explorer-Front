import styled from 'styled-components';

export const Container = styled.button`
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
`;