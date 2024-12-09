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
`;