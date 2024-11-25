import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    text-align: center;
    /* Poppins/100-medium */
    font-family: Poppins;
    font-size: 0.87rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 171.429% */
`;