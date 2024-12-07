import { Container } from "./styles";

export function TextButton({ className, text, icon: Icon }) {
    return(
        <Container className={className} type="button">
            {
                Icon &&
                <Icon size={24}/>
            }
            <span>{text}</span>
        </Container>
    )    
}