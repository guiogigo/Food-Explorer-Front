import { Container, Content, Form } from "./styles";

import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { FiUpload } from 'react-icons/fi'

import CaretLeft from '../../assets/CaretLeft.svg';
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function NewDish(){

    const [categories, setCategories] = useState([])
    const [imgName, setImgName] = useState("Selecione image")

    async function fetchCategories() {
        try {
            const response = await api.get(`/categories`)
            setCategories(response.data)     
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return(
        <Container>
            <Header/>


            <Content>
                <Link to="/">
                        <img src={CaretLeft} alt="voltar" /> Voltar
                </Link>
                
                <h1>Novo Prato</h1>

                <Form>
                    <div>
                        <span>Imagem do prato</span>
                        <label 
                            className='input-image'
                            tabIndex="0"
                        >
                            <FiUpload size={24}/> <span>{imgName}</span>
                            <input
                                type='file'
                                name="picture"
                                className="hidden"
                                placeholder="Selecione imagem do prato"
                                accept="image/png, image/jpeg"
                            />
                        </label>
                    </div>

                    <div>
                        <span>Nome</span>
                        <Input
                            type='text'
                            placeholder="Ex.: Salada Ceasar"
                            color="800"
                        />
                    </div>

                    {categories &&
                        <div >
                            <span>Categoria</span>
                            <select name="Categoria" className="categories">
                            {
                                categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))
                            }
                            </select>
                        </div>
                    }

                    <div>
                        <span>Ingredientes</span>
                    </div>

                    <div>
                        <span>Preço</span>
                        <Input
                            type='number'
                            placeholder="R$ 00,00"
                        />
                    </div>

                    <div>
                        <span>Descrição</span>
                        <Input
                            type='number'
                            placeholder="R$ 00,00"
                        />
                    </div>

                    <Button text="Salvar Alterações"/>
                </Form>

            </Content>
            <Footer/>
        </Container>
    )
}