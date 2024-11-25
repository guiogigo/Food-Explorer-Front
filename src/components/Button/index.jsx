import { Container } from "./styles";


export function Button({ icon: Icon, text }) {
    return (
        <Container type="button">
            {
                Icon &&
                <img src={Icon} alt="" />
            }
            <span>{text}</span>
        </Container>
    )
}