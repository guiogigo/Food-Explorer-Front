import { styled } from 'styled-components';



export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6.5rem auto 4.8rem;
    grid-template-areas:
    "header"
    "content"
    "footer";

    > div {
        padding: 4rem 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
    }

`;



export const Content = styled.div`
    grid-area: content;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    padding: 4rem 7.68rem;
`;

