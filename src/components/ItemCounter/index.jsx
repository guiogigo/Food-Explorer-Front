import { Container } from "./styles";
import { Button } from "../Button";
import { TextButton } from "../TextButton";

import {FiPlus, FiMinus} from 'react-icons/fi'
import { useState } from "react";

import { useCart } from "../../hooks/cart";

export function ItemCounter({text, icon, item, ...rest}) {
    icon ? icon : null;


    const [qtd, setQtd] = useState(0)
    const { addDish } = useCart();

    function handleAddToCart() {
        if(qtd === 0) return
        addDish(item, qtd)
        setQtd(0)
    }

    function handleAddQtd() {
        if(qtd < 99) {
            setQtd(prev => prev + 1)
        }
    }

    function handleSubQtd() {
        if(qtd > 0){
            setQtd(prev => prev - 1)
        }
    }

    return(
        <Container>
            
            <div className="counter">
                <TextButton icon={FiMinus} onClick={handleSubQtd}/>
                <span>{String(qtd).padStart(2, '0')}</span>
                <TextButton icon={FiPlus} onClick={handleAddQtd}/>
            </div>
            
            <Button icon={icon} text={text} onClick={handleAddToCart}/>
            
        </Container>
    )
}