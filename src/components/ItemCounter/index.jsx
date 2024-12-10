import { Container } from "./styles";
import { Button } from "../Button";
import { TextButton } from "../TextButton";

import {FiPlus, FiMinus} from 'react-icons/fi'


export function ItemCounter({text, icon, ...rest}) {
    icon ? icon : null;
    return(
        <Container>
            
            <div className="counter">
                <TextButton icon={FiMinus}/>
                <span>01</span>
                <TextButton icon={FiPlus}/>
            </div>
            
            <Button icon={icon} text={text}/>
            
            

        </Container>
    )
}