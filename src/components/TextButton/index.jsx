import { Container } from "./styles";

export function TextButton({ text }) {
    return(
        <Container type="button">
            <span>{text}</span>
        </Container>
    )    
}