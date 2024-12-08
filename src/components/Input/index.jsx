import { Container } from "./styles";

export function Input({icon: Icon, border=false,...rest}) {
    console.log(border.toString());
    return(
        <Container border={border.toString()}>
            {Icon && <Icon size={20} />}
            <input {...rest}></input>
        </Container>
    ) 
}