import { Container } from "./styles";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import PlaceHolderImg from '../../assets/foodImages/empty.jpg';

export function FavItem({item, ...rest}) {
    const img = item.avatar ? `${api.defaults.baseURL}/files/${item.avatar}` : PlaceHolderImg;
    const navigate = useNavigate()

    async function handleRemoveFav() {
        try {
            await api.delete(`/favorites/${item.id}`)
        } catch (error) {   
            console.log(error)
        }
    }

    function handleSelect() {
        navigate(`/dishes/${item.id}`)
    }

    return(
        <Container>
            <img src={img} alt="Imagem do prato" onClick={handleSelect}/>
            <div className="text">
                <h3 onClick={handleSelect} >{item.name}</h3>
                <button onClick={handleRemoveFav}>Remover dos favoritos</button>

            </div>
        </Container>
    )
}