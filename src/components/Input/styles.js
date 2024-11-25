import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    color: ${({theme}) => theme.COLORS.LIGHT_500};

    padding: 12px 14px;
    border-radius: 5px;
    gap: 14px;

    height: 48px;

    
    
    > input {
        width: 100%;
        padding: 12px;
        
        font-size: 1rem;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: 0;

        align-content: center;
        text-align: center;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }

        > svg {
            margin-left: 16px;
        }
    }
`;