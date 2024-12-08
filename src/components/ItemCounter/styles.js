import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;



    .counter {
        display: flex;
        gap: 14px;

        > button {
            border: none;
            background: none;
            color: ${({theme}) => theme.COLORS.LIGHT_300};

            display: flex;
            align-items: center;
            justify-content: center;

            > svg {
                width: 2.4rem;
                height: 2.4rem;
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
`;