import { Container, Profile } from "./styles";

export function Footer() {
    return(
        <Container> 
            <Profile>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="31" viewBox="0 0 26 31" fill="none">
                <path d="M13 0.866394L25.9904 8.36639V23.3664L13 30.8664L0.00961876 23.3664V8.36639L13 0.866394Z" fill="#065E7C"/>
            </svg>
                <h1>food explorer</h1>
            </Profile>
            <span>2024 - Guilherme Batista</span>
        </Container>
    )
}