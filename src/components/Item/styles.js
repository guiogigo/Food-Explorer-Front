import styled from "styled-components";
import { TextButton } from "../TextButton";

export const Heart = styled(TextButton)``;

export const Container = styled.div`
    padding: 2.4reem;

    width: 30.4rem;
    height: 46rem;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 15px;
    
    text-align: center;
    font-style: normal;

    > ${Heart} {
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;

        width: 2.4rem;
        height: 2.4rem;
    }
    
    > img {
        width: 17.6rem;
        height: 17.6rem;
    }

    > h3 {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        text-align: center;
        font-family: Poppins;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 140%; /* 33.6px */

        display: flex;
        align-items: center;        
        > svg {
            width: 2.4rem;
            height: 2.4rem;
        }
    }

    > p {
        color: ${({theme}) => theme.COLORS.LIGHT_400};

        font-family: Roboto;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 160%;
    }

    > span {
        color: ${({theme}) => theme.COLORS.CAKE_200};

        font-family: Roboto;
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; 
    }
`;


    
