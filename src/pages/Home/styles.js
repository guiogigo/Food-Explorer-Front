import { styled } from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'


export const Container = styled.div`
    max-width: 100%;
    height: 100%;
    min-height: 100vh;

    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas:
    "header"
    "content"
    "footer";

    ${DEVICE_BREAKPOINTS.LG} {
        grid-template-rows: 9.6rem auto 7.7rem
    }
`;

export const Content = styled.div`
    min-height: 100%;
    max-width: 100%;

    grid-area: content;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    gap: 3rem;
`;


export const Banner = styled.div`
    width: 100%;
    margin-bottom: 6.2rem;

    .banner-wrapper {
        ${DEVICE_BREAKPOINTS.LG} {
            min-width: 100%;
            margin: 17.2rem 1rem 0;
        }
    }
    
    .banner-content {
        width: calc(100% - 5.2rem);

        min-height: 12rem;
        margin: 4.4rem 1.6rem 0 3.6rem;

        padding: 3.6rem .8rem 0 16rem;

        position: relative;
        
        background: ${({theme}) => theme.COLORS.GRADIENT_200};
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        border-radius: 2.9px;
        

        > h2 {
            font-family: Poppins;
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 140%;
            padding-bottom: 4px;
        }

        > span {
            font-family: Roboto;
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 140%; 
            padding-bottom: 1.6rem;
        }

        .banner-img {           
            > img {
                position: absolute;
                width: 19.1rem;
                height: 14.9rem;

                opacity: 0.8;
                object-fit: cover;
                object-position: top;
                transform: scaleX(-1);
                bottom: 0;
                left: -10%;

                ${DEVICE_BREAKPOINTS.SM}{
                    left: -4%;
                }
                
                animation-name: leftSlide;
                animation-duration: 1s;
            }   

            @keyframes leftSlide {
                from {
                    opacity: 0;
                    transform: translateX(1rem) scaleX(-1);
                }
                to {
                    opacity: 0.8;
                    transform: translateX(0) scaleX(-1);
                }
            }
        }


        ${DEVICE_BREAKPOINTS.LG} {
            max-width: 112rem;
            min-height: 26rem;

            margin: 0 auto;

            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;

            > h2 {
                font-size: 4rem;
                font-weight: 500;
                width: 58%;
            }

            > span {
                font-size: 1.6rem;
                line-height: 100%;
                width: 58%;
            }

            .banner-content {
                margin: 0 auto;
            }

            .banner-img {
                > img {
                    width: 63.2rem;
                    height: 40.6rem;

                }
            }
        }
    }

    
`;


