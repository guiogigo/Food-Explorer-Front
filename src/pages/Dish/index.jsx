import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ItemCounter } from '../../components/ItemCounter'
import { Tag } from "../../components/Tag";
import CaretLeft from '../../assets/CaretLeft.svg';

import dishImage from '../../assets/foodImages/name=molla, size=400.png'
import { Link, useParams } from "react-router-dom";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Dish() {

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

                        <ItemCounter item={dish} text="pedir ∙ R$ 25,00"/>
                    </div>
                </div>

                

            </Content>}

            <Footer/>
        </Container>
    )
}