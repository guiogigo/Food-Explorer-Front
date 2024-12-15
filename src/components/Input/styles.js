import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;

    display: flex;
    align-items: center;
    background-color: ${({ theme, color }) => theme.COLORS[`DARK_${color || 900}`]};
    color: ${({theme}) => theme.COLORS.LIGHT_500};

    padding: 1.2rem 1.4rem;
    border-radius: 5px;
    gap: 1.4rem;

    height: 4.8rem;

    border: ${(props) => (props.border == "true" ? `1px solid ${props.theme.COLORS.LIGHT_100}` : 'none')};

    
    
    > input {
        width: 100%;
        padding: 1.2rem 1.2rem 1.2rem 0;
        
        font-size: 1.6rem;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: 0;



        &:placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }

        > svg {
            margin-left: 16px;
        }


    }

    
`;