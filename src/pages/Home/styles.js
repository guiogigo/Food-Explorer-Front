import { styled } from 'styled-components';



export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6.5rem auto 4.8rem;
    grid-template-areas:
    "header"
    "content"
    "footer"
`;

export const Banner = styled.div`
    grid-area: content;
    display: flex;
    justify-content: center;
    
    > div {
        margin-top: 132px;

        position: relative;
        width: 100%;
        height: 260px;
        
        background: ${({theme}) => theme.COLORS.GRADIENT_200};
        border-radius: 8px;
        
        display: flex;
        
        justify-content: center;
        align-items: flex-end;
        
        flex-direction: column;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        > img {
            width: 632px;
            height: 406px;
            object-fit: cover;
            object-position: top;
            transform: scaleX(-1);
            opacity: 0.8;

            position: absolute;
            z-index: 1;
            left: -2.5%;
            bottom: 0;
        
        }


        > h2 {
            /* Poppins/500-medium */
            font-family: Poppins;
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 56px */
        }

        > span {
            /* Roboto/Small regular */
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 16px */
        }
    }
`;

export const Content = styled.div`
    grid-area: content;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    padding: 4rem 7.68rem;
`;

