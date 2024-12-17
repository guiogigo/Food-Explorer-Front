import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FavItem } from "../../components/FavItem";

import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";

export function Favorites() {

    const { user } = useAuth()
    const [favs, setFavs] = useState([])

    useEffect(() => {
        async function fetchFavorites() {
            const {data} = await api.get(`/favorites`, {user_id: user.id})
            console.log(data.favorites)
            setFavs(data.favorites)
        }

        fetchFavorites();
    }, [favs])

    return(
        <Container>
            <Header/>
            <Content>
                <h1>Meus favoritos</h1>
                <div className="favorites">
                    {
                        favs &&
                        favs.map((fav) => (
                            
                            <FavItem key={`favid:${fav.id}`}item={fav}/>
                        ))
                    }
                </div>
            </Content>
            <Footer/>
        </Container>
    )
}