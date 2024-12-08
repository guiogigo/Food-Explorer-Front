import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Item } from '../../components/Item';
import { Container, Content } from './styles';
import frutasBanner from '../../assets/Frutas.png'
import imgTeste from '../../assets/foodImages/name=gambe, size=200.png'
import { SwiperComponent } from '../../components/Swiper';


const dados = [
    {id: "1", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="19,97"/>},
    {id: "2", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="29,97"/>},
    {id: "3", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="39,97"/>},
    {id: "4", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="49,97"/>},
    {id: "5", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="59,97"/>},
    {id: "6", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="69,97"/>},
    {id: "1", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "2", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="89,97"/>},
    {id: "3", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="99,97"/>},
    {id: "4", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "5", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "6", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "1", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "2", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "3", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "4", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "5", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "6", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
]

export function HomeTest() {
    return(
        <Container>
            <Header/>

            
            <div><SwiperComponent title="Teste" data={dados}/></div>

            <Footer />
        </Container>
    );
}