import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'


export const Container = styled.div`
    position: relative;
    
    width: min(95vw, 112.2rem);
    margin: 0 auto 4.8rem;

    h2.title {
        margin-bottom: 2.3rem;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        ${DEVICE_BREAKPOINTS.LG} {
            font-size: 3.2rem;
        }
    }

    ${DEVICE_BREAKPOINTS.LG} {
        [class*="number-slide"]:first-of-type {
        /* margin-left: 3rem; */
        }

        [class*="number-slide"]:last-of-type {
        /* padding-right: 3rem; */
        }
    }

    .arrow {
        width: 4rem;
        height: 4rem;
        position: absolute;
        z-index: +1;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
        cursor: pointer;
        user-select: none;
    }

    .arrow-bg.arrow--right, .arrow-bg.arrow--left {
        /* Arrow Shadow */
        &::before{
        content: '';
        width: 4rem;
        height: 46.8rem;
        position: absolute;
        pointer-events: none;
        }
    }

    .arrow--left {
        left: 5px;
    }

    .arrow-bg.arrow--left {
        &::before{
        left: 0;
        bottom: 0;
        background: linear-gradient(to right, #000a0fee 0%, #000a0f55 100%);
        }
    }

    .arrow--right {
        right: 5px;
    }
    .arrow-bg.arrow--right {
    &::before{  
        right: 0;
        bottom: 0;
        background: linear-gradient(to left, #000a0fee 0%, #000a0f55) 100%;
        }
    }

    .arrow--disabled {
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
        opacity: 0.2;
    }

    .arrow,
    .arrow--left,
    .arrow--right,
    .arrow--disabled,
    .arrow-bg,
    .arrow-bg.arrow--left,
    .arrow-bg.arrow--right {
        display: none;
    }

    ${DEVICE_BREAKPOINTS.LG} {
        .arrow,
        .arrow--left ,
        .arrow--right ,
        .arrow--disabled ,
        .arrow-bg ,
        .arrow-bg.arrow--left ,
        .arrow-bg.arrow--right {
            display: initial;
        }
    }

`;