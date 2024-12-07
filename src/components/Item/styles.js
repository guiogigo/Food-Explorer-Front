import styled from "styled-components";
import { FiHeart } from "react-icons/fi";

export const Container = styled.div`
    padding: 1.5rem;

    width: 19rem;
    height: 28.8rem;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 15px;

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;

        width: 1.5rem;
        height: 1.5rem;
    }
    
    text-align: center;
    font-style: normal;

    
    > img {
        width: 11rem;
        height: 11rem;
    }

    > h3 {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        text-align: center;
        font-family: Poppins;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 140%; /* 33.6px */

        display: flex;
        align-items: center;        
        > svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    > p {
        color: ${({theme}) => theme.COLORS.LIGHT_400};

        font-family: Roboto;
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 160%;
    }

    > span {
        color: ${({theme}) => theme.COLORS.CAKE_200};

        font-family: Roboto;
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; 
    }
`;