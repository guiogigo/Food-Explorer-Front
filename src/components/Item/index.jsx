import { Container, IconButton } from "./styles";
import { ItemCounter } from "../ItemCounter";
import { Link } from "react-router-dom";

import { FaRegHeart, FaHeart, FaPen } from 'react-icons/fa'
import { RiArrowDropRightLine } from 'react-icons/ri'

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import PlaceHolderImg from '../../assets/foodImages/empty.jpg';

export function Item({item, url='#', ...rest}) {
    const img = item.avatar ? `${api.defaults.baseURL}/files/${item.avatar}` : PlaceHolderImg;
    const [favorite, setFavorite] = useState(item.isFav)

    const { user } = useAuth();


    async function handleFavorite() {
        try {
            if(favorite) {
                await api.delete(`/favorites/${item.id}`)
            }
            else {
                await api.post(`/favorites/${item.id}`)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setFavorite(prev => !prev)
        }
    }

    return(
        <Container {...rest}>
            
            {
                user.role === 'admin' ? 
                <Link to={`/edit/${item.id}`} className="edit">
                    <IconButton icon={FaPen}/>
                </Link>
                :
                favorite ? <IconButton icon={FaHeart} onClick={handleFavorite}/> : <IconButton icon={FaRegHeart} onClick={handleFavorite}/>  
            }
            
            <Link to={url}>
                <img src={img} alt="imagem do prato"/>
                <h3>{item.name.toString()} <RiArrowDropRightLine/></h3>
            </Link>
            <p>{item.description.toString()}</p>
            <span>R$ {String(item.price.toFixed(2)).replace('.', ',')}</span>

            {
                user.role === 'admin' ? null : <ItemCounter item={item}text="Incluir"/>
            }
        </Container>
    )
}

/*

export function Item({item, url='#', ...rest}) {

    return(
        <Container >
            <Heart icon={FiHeart}/>
            
            <Link to={url}>
                <img src={item.avatar} alt="imagem do prato"/>
                <h3>{item.name.toString()} <RiArrowDropRightLine/></h3>
            </Link>
            <p>{item.description.toString()}</p>
            <span>R$ {item.price.toString()}</span>

            <ItemCounter text="Incluir"/>
        </Container>
    )
}

*/