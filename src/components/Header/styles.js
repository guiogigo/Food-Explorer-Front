import { styled } from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 6.5rem;
    width: 100%;

    background-color: ${({theme}) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    padding: 1.5rem 7.68rem;

    > img {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    h1 {
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    span {
        color: ${({theme}) => theme.COLORS.CAKE_200};

        font-family: Roboto;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 19.2px */

        display: none;
    }

    > img {
        width: 30px;
        height: 30px;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        white-space: nowrap;
    }
`;