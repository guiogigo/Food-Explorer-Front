import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ItemCounter } from '../../components/ItemCounter'
import { Tag } from "../../components/Tag";
import CaretLeft from '../../assets/CaretLeft.svg';

import receiptIcon from "../../assets/receipt-icon.svg"
import dishImage from '../../assets/foodImages/name=molla, size=400.png'

export function Dish({dish}) {
    return(
        <Container>
            <Header/>

            <Content>   
                <a href="#">
                    <img src={CaretLeft} alt="voltar" /> Voltar
                </a>

                <div className="dish-wrapper">
                    <div className="dish-preview">
                        <img src={dishImage} alt="foto do prato" />
                    </div>


                    <div className="dish-info">
                        <h3>Salada Ravanello</h3>

                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. </p>

                        <div className="tags">
                            <Tag title="alface"/>
                            <Tag title="cebola"/>
                            <Tag title="pão naan"/>
                            <Tag title="pepino"/>
                            <Tag title="rabanete"/>
                            <Tag title="tomate"/>
                        </div>

                        <ItemCounter text="pedir ∙ R$ 25,00"/>
                    </div>
                </div>

                


            </Content>

            <Footer/>
        </Container>
    )
}