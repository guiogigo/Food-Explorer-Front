import { Container } from "./styles";

import receiptIcon from "../../assets/receipt-icon.svg"

export function Button({ text }) {
    return (
        <Container type="button">
            <img src={receiptIcon} alt="" />
            <span>{text}</span>
        </Container>
    )
}