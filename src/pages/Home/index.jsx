import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container, Banner } from './styles';
import frutasBanner from '../../assets/Frutas.png'

export function Home() {
    return(
        <Container>
            <Header/>

            <Banner>
                
                <div>
                    <img src={frutasBanner} alt="" />
                    <h2>Sabores inigualáveis</h2>
                    <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                </div>
            </Banner>

            <Footer />
        </Container>
    );
}