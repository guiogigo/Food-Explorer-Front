import { Container, Profile, Form } from "./styles";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button'
import { Link} from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../hooks/auth.jsx";

import rocketIcon from "../../assets/rocket-icon.svg"

export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({email, password})
    }

    return(
        <Container>
            <Profile>
                <img src={rocketIcon} alt="" />
                <h1>food explorer</h1>
            </Profile>

            <Form>
                <h1 className="desktop">Faça Login</h1>
                <div>
                    <span>Email</span>
                    <Input 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="email"
                        border="true"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <span>Senha</span>
                    <Input 
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        border="true"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                    <Button text="Entrar" onClick={handleSignIn}/>
                    <Link to="/signup">
                        Criar uma conta
                    </Link>
            </Form>
            
        </Container>
    )
}
