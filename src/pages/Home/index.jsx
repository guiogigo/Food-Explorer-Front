import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Item } from '../../components/Item';
import { Container, Banner, Content } from './styles';
import frutasBanner from '../../assets/Frutas.png'
import imgTeste from '../../assets/foodImages/name=macaron, size=200.png'

export function Home() {
    return(
        <Container>
            <Header/>

            <Content>
                <Banner>
                    
                    <div>
                        <img src={frutasBanner} alt="" />
                        <h2>Sabores inigualáveis</h2>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                    </div>
                </Banner>

                <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>

            </Content>

            <Footer />
        </Container>
    );
}