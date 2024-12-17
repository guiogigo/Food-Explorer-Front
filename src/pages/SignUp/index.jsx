import { useState } from 'react';

import { Container, Profile, Form } from "./styles";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button'
import { Link, useNavigate } from "react-router-dom";

import rocketIcon from "../../assets/rocket-icon.svg"

import { api } from '../../services/api';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
            
        }
        
        api.post("/users", { name, email, password }).then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/");
        })
        .catch((error) => {
            if(error.response) {
                alert(error.response.data.message)
            }else {
                alert("Não foi possível cadastrar")
            }
        })

    }

    return(
        <Container>
            <Profile>
                <img src={rocketIcon} alt="" />
                <h1>food explorer</h1>
            </Profile>

            <Form>
                <h1 className="desktop">Crie sua Conta</h1>

                <div>
                    <span>Seu nome</span>
                    <Input 
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <span>Email</span>
                    <Input 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <span>Senha</span>
                    <Input 
                        placeholder="No mínimo 6 caracteres"
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <Button text="Criar conta" onClick={handleSignUp}/>
                <Link to="/">
                    Já tenho uma conta
                </Link>
            </Form>
            
        </Container>
    )
}
