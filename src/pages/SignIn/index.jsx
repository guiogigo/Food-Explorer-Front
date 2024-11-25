import { Container, Profile, Form } from "./styles";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button'

import rocketIcon from "../../assets/rocket-icon.svg"
import { TextButton } from "../../components/TextButton";

export function SignIn() {
    return(
        <Container>
            <Profile>
                <img src={rocketIcon} alt="" />
                <h1>food explorer</h1>
            </Profile>

            <Form>
                <h1>Faça Login</h1>

                <div>
                    <span>Email</span>
                    <Input 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"
                        border="true"
                    />
                </div>

                <div>
                    <span>Senha</span>
                    <Input 
                        placeholder="No mínimo 6 caracteres"
                        type="text"
                        border="true"
                    />
                </div>

                

                <Button text="Entrar"/>

                <TextButton text="Criar uma conta"/>
            </Form>
            
        </Container>
    )
}
