import { Container, Heart } from "./styles";
import { ItemCounter } from "../ItemCounter";

import { FiHeart } from 'react-icons/fi'
import { RiArrowDropRightLine } from 'react-icons/ri'


export function Item({img ,title, desc, price}) {

    return(
        <Container >
            <Heart icon={FiHeart}/>
            <img src={img} alt=""/>
            <h3>{title.toString()} <RiArrowDropRightLine/></h3>
            <p>{desc.toString()}</p>
            <span>R$ {price.toString()}</span>

            <ItemCounter/>
        </Container>
    )
}