import { Container, Heart } from "./styles";
import { ItemCounter } from "../ItemCounter";
import { Link } from "react-router-dom";

import { FiHeart } from 'react-icons/fi'
import { RiArrowDropRightLine } from 'react-icons/ri'


export function Item({item, url='#', ...rest}) {

    return(
        <Container >
            <Heart icon={FiHeart}/>
            
            <Link to={url}>
                <img src={item.img} alt="imagem do prato"/>
                <h3>{item.title.toString()} <RiArrowDropRightLine/></h3>
            </Link>
            <p>{item.desc.toString()}</p>
            <span>R$ {item.price.toString()}</span>

            <ItemCounter text="Incluir"/>
        </Container>
    )
}