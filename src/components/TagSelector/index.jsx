import { Container } from "../TagSelector/styles";
import { FiPlus, FiX } from 'react-icons/fi'

export function TagSelector({isnew=false, value, onClick, ...rest}) {
    return(
        <Container isnew={isnew.toString()} {...rest}>
            <input
                type="text"
                value={value}
                readOnly={!isnew}
                {...rest}
                maxLength="35"
                size={value.length < 7 ? 7 : value.length - 2}
            />
            <button 
                type="button" 
                onClick={onClick}
                className={isnew ? "button-add" : "button-delete"}
            >
                {isnew ? <FiPlus size={16}/> : <FiX size={16}/>}
            </button>
        </Container>
    )
}