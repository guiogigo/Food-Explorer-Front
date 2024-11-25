import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6.5rem auto 0;
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
        margin-top: 164px;

        position: relative;
        width: 80%;
        height: 260px;
        
        background: ${({theme}) => theme.COLORS.GRADIENT_200};
        border-radius: 8px;
        
        padding: 100px;
        align-items: flex-end;
        
        display: flex;
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
            left: -5%;
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