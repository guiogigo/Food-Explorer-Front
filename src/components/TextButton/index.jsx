import { Container } from "./styles";

export function TextButton({ className, text, icon: Icon, ...rest }) {
    return(
        <Container className={className} type="button" {...rest}>
            {
                Icon &&
                <Icon size={24}/>
            }
            <span>{text}</span>
        </Container>
    )    
}