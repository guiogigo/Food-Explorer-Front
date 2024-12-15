import { Container } from "./styles";

export function Input({icon: Icon, border=false,...rest}) {
    return(
        <Container border={border.toString()}>
            {Icon && <Icon size={20} />}
            <input type="text" {...rest}></input>
        </Container>
    ) 
}