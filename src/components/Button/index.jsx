import { Container } from "./styles";


export function Button({ icon: Icon, text, color,...rest }) {
    return (
        <Container type="button" {...rest} color={color}>
            {
                Icon &&
                <img src={Icon} alt="" />
            }
            <span>{text}</span>
        </Container>
    )
}