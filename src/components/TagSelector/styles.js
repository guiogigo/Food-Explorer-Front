import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    background-color: ${({theme, isnew}) => isnew === 'true' ? "transparent" : theme.COLORS.LIGHT_500};
    color: ${({theme, isnew}) => isnew === 'true' ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    border: ${({theme, isnew}) => isnew === 'true' ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    padding: 1rem 1.6rem;
    border-radius: 8px;

    > button {
        border: none;
        background: none;

        display: flex;
        align-items: center;
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    }

    .button-delete {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    > input {
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline;
        width: fit-content;
        font-size: 1.6rem;

        padding: 0;
        border: none;
        height: 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }
`;
