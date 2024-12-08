import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Item } from '../../components/Item';
import { Container, Banner, Content } from './styles';
import frutasBanner from '../../assets/Frutas.png'
import imgTeste from '../../assets/foodImages/name=gambe, size=200.png'
import { SwiperComponent } from '../../components/Swiper';


const dados = [
    {id: "1", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "2", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "3", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "4", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "5", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "6", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "1", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "2", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
    {id: "3", item: <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>},
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

export function Home() {
    return(
        <Container>
            <Header/>

            <Content>
                
                <Banner>
                    <div className='banner-wrapper'>
                        <div className='banner-content'>
                            <div className='banner-img'><img src={frutasBanner} alt="" /></div>
                            <h2>Sabores inigualáveis</h2>
                            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                        </div>
                    </div>
                </Banner>

                <Item img={imgTeste} title="Spaguetti Gambe" desc="Massa fresca com camarões e pesto. " price="79,97"/>
                
            </Content>

            <Footer />
        </Container>
    );
}

/*<SwiperComponent data={dados}/> */

/*

    

*/