import { Container } from "./styles";

export function Input({icon: Icon, border=false, color='900', ...rest}) {
    return(
        <Container border={border.toString()} color={color}>
            {Icon && <Icon size={20} />}
            <input type="text" {...rest}></input>
        </Container>
    ) 
}