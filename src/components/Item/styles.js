import styled from "styled-components";
import { TextButton } from "../TextButton";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const IconButton = styled(TextButton)``;

export const Container = styled.div`
    
    height: 46rem;
    width: 20rem;
    padding: 1.2rem;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 15px;
    
    text-align: center;
    font-style: normal;

    transition: transform 300ms, filter 200ms;

    &:hover {
        transform: translateY(3px);
        filter: brightness(1.1);
    }
    
    > ${IconButton} {
        position: absolute;
        top: .3rem;
        right: .3rem;

        width: 2.4rem;
        height: 2.4rem;

        transition: transform 300ms;
        
        &:hover {
            transform: scale(1.1);
        }
    }
    
    .edit {
        
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;
        z-index: 99;

        transition: transform 300ms;

        &:hover {
        transform: scale(1.1);
        }
    }
    
    a {
        width: 100%;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        > img {
            width: 17.6rem;
            height: 17.6rem;
        }
    
        > h3 {
            width: 100%;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            text-align: center;
            font-family: Poppins;
            
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 140%; /* 33.6px */
            max-width: 25.6rem;

            text-overflow: ellipsis;
            display: flex;
            align-items: center;     
            justify-content: center;
            > svg {
                width: 2.4rem;
                height: 2.4rem;
            }
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
        
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; 
    }

    ${DEVICE_BREAKPOINTS.LG} {
        padding: 2.4rem;

        width: 30.4rem;

        > ${IconButton} {
            position: absolute;
            top: 1.6rem;
            right: 1.6rem;

            width: 2.4rem;
            height: 2.4rem;

            transition: transform 300ms;
            
            &:hover {
                transform: scale(1.1);
            }
        }

        a > h3 {
            font-size: 2.4rem;
        }

        > span {
            font-size: 3.2rem;
        }
    }
`;


    
