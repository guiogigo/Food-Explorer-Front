import { Container, Profile, Form } from "./styles";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button'

import rocketIcon from "../../assets/rocket-icon.svg"
import { TextButton } from "../../components/TextButton";

export function SignUp() {
    return(
        <Container>
            <Profile>
                <img src={rocketIcon} alt="" />
                <h1>food explorer</h1>
            </Profile>

            <Form>
                <h1>Crie sua Conta</h1>

                <div>
                    <span>Seu nome</span>
                    <Input 
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                    />
                </div>

                <div>
                    <span>Email</span>
                    <Input 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"
                    />
                </div>

                <div>
                    <span>Senha</span>
                    <Input 
                        placeholder="No mínimo 6 caracteres"
                        type="text"
                    />
                </div>
                

                <Button text="Criar conta"/>

                <TextButton text="Já tenho uma conta"/>
            </Form>
            
        </Container>
    )
}
