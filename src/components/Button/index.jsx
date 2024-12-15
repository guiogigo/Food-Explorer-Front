import { Container } from "./styles";


export function Button({ icon: Icon, text, ...rest }) {
    return (
        <Container type="button" {...rest}>
            {
                Icon &&
                <img src={Icon} alt="" />
            }
            <span>{text}</span>
        </Container>
    )
}