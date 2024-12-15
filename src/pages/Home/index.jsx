import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Item } from '../../components/Item';
import { Container, Banner, Content } from './styles';
import frutasBanner from '../../assets/Frutas.png'
import { SwiperComponent } from '../../components/Swiper';

import { useState, useEffect } from 'react';
import { useSearch } from '../../hooks/search';
import { api } from '../../services/api';

export function Home() {
    const [categories, setCategories] = useState([]);
    const [dishes, setDishes] = useState([]);
    const {searchValue, setSearch} = useSearch();

    const query = searchValue === undefined ? '' : searchValue;

    async function fetchDishes() {
        try {
            const response = await api.get(`/dishes?search=${query}`);
            setDishes(((response.data).dishes))
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchCategories() {
        try {
            const response = await api.get('/categories');
            setCategories((response.data))
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {

        fetchCategories();
        fetchDishes();
    }, [])

    useEffect(() => {
        fetchDishes();
    }, [ searchValue ])

    

    return(
        <Container>
            <Header/>

            <Content>
                {
                    query ? null : 
                
                    <Banner>
                        <div className='banner-wrapper'>
                            <div className='banner-content'>
                                <div className='banner-img'><img src={frutasBanner} alt="" /></div>
                                <h2>Sabores inigualáveis</h2>
                                <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                            </div>
                        </div>
                    </Banner>
                }

                

                {
                    categories.map((cat) => {
                        return(
                            <SwiperComponent key={`category:${cat.id}`} title={cat.name}>
                                {
                                    dishes && 
                                    dishes.filter((dish) => dish.categoryId === cat.id).map((d, i) => {
                                        return(<Item 
                                            key={`dish:${d.id}`}
                                            item={d}
                                            url={`/dishes/${d.id}`}
                                        />)
                                    })
                                }
                            </SwiperComponent>
                        )
                    })
                }
                                
            </Content>

            <Footer />
        </Container>
    );
}

/*<SwiperComponent data={dados}/> */

/*
<Item img={imgTeste} title="comida" key={`dish:${dish.id}`} desc="Massa fresca com camarões e pesto. " price="79,97"/>
    
{dados.map((dish) => (
                                    <Item item={{
                                        id: 2,
                                        url: `/dish/${self.id}`,
                                        img: imgTeste,
                                        title: "comida",
                                        desc: "Massa fresca com camarões e pesto.",
                                        price:  '79,97',
                                    }} url={'/dish/1'} key={`dish:${dish.id}`}/>
                                ))}
.map((dish, id) => {
                                        <Item 
                                            key={`Dish: ${id}`}
                                            item={dish}
                                            url={`/dishes/${dish.id}`}
                                        />
                                    })
*/