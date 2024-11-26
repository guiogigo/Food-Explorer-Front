import styled from 'styled-components';

export const Container = styled.footer`
    grid-area: footer;
    background-color: ${({theme}) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 77px;

    padding: 1.5rem 7.68rem;
    gap: 8px;  

    > span {
        color: ${({theme}) => theme.COLORS.LIGHT_200};
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 22.4px */
    }
`;

export const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    white-space: nowrap;

    > h1 {
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_700};
    }
    > svg {
        width: 30px;
        height: 30px;
        path {
            fill: ${({theme}) => theme.COLORS.LIGHT_700};

        }
    }

`;