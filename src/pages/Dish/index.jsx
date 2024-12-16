import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ItemCounter } from '../../components/ItemCounter'
import { Tag } from "../../components/Tag";
import CaretLeft from '../../assets/CaretLeft.svg';

import { Link, useParams } from "react-router-dom";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/auth";

export function Dish() {

    const { user } = useAuth();

    const [dish, setDish] = useState(null)
    const params = useParams();
    
    const img = dish?.avatar ? `${api.defaults.baseURL}/files/${dish.avatar}` : ""
    

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`)
            setDish(response.data)
        }
        fetchDish()
    }, [])


    return(
        <Container>
            <Header/>

            {dish && <Content>                    
                    
                 
                <Link to="/">
                    <img src={CaretLeft} alt="voltar" /> Voltar
                </Link>

                <div className="dish-wrapper">
                    <div className="dish-preview">
                        <img src={img} alt="foto do prato" />
                    </div>
                    <div className="dish-info">
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>

                        <div className="tags">
                            {
                                dish.ingredients.map((ingredient, i) => (
                    
                                    
                                    <Tag key={i} title={ingredient}/>
                                ))
                            }
                        </div>

                        {
                            user?.role === "admin" ? null :
                            <ItemCounter item={dish} text={`pedir ∙ R$ ${dish.price.toFixed(2).replace('.', ',')}`}/>
                        }
                    </div>
                </div>

                

            </Content>}

            <Footer/>
        </Container>
    )
}