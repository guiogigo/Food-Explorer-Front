import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    gap: 7px;

    width: 100%;
    overflow: hidden;


    .counter {
        display: flex;
        //gap: 14px;
        gap: 7px;

        > button {
            border: none;
            background: none;
            color: ${({theme}) => theme.COLORS.LIGHT_300};

            display: flex;
            align-items: center;
            justify-content: center;

            
            > svg {
                width: 1.2rem;
                height: 1.2rem;
            }
        }

        > span {
            color: ${({theme}) => theme.COLORS.LIGHT_300};

            font-family: Roboto;
            font-size: 2rem;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
        }
    }

    ${DEVICE_BREAKPOINTS.LG} {
        gap: 16px;

        .counter {
            gap: 14px;

            > button {
                > svg {
                    width: 2.4rem;
                    height: 2.4rem;
                }
            }
        }
    }
`;