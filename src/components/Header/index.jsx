import { Container, Profile } from "./styles";
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'

import { Input } from "../Input/index.jsx";

import rocketIcon from '../../assets/rocket-icon.svg';
import logoutIcon from '../../assets/logout-icon.svg';
import receiptIcon from "../../assets/receipt-icon.svg"
import { useRef } from "react";

import { useAuth } from "../../hooks/auth.jsx";
import { useCart } from "../../hooks/cart.jsx";

import { Link } from "react-router-dom";
import { Button } from "../Button/index.jsx";

export function Header() {
    const navRef = useRef()
    const { signOut, user } = useAuth();

    const { cartItems } = useCart();
    const items = cartItems;

    function toggleNavbar(e) {
        console.log('toggleNavbar', e.target);
        navRef.current.classList.toggle('mobile-menu');
    }

    return(
        <Container>
            <button className="menu no-bg" onClick={toggleNavbar}>
                <FiMenu id="menu-img" size={32}/>
            </button>

            <Profile to="/">
                <img src={rocketIcon} alt="" />
                <div className="profile-txt">
                    <h1>food explorer</h1>
                    {
                        user?.role == "admin" ? 
                            <span>admin</span>
                        : null
                    }
                </div>
            </Profile>

            <div className="navBar">
                <nav ref={navRef}>
                    <div className="bg">
                        <button className="menu no-bg" onClick={toggleNavbar}>
                            <FiX size={24}/>
                            Menu
                        </button>
                    </div>
                    <div className="menu-content">
                        <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>
                        <button className="mobile-button" >
                            {
                                user?.role == 'admin' ?
                                /*<Link className="teste">
                                
                                <span>Novo Prato</span>
                                </Link>*/
                                <span>
                                    <Link>Novo Prato</Link>
                                </span>

                                
                                : null
                            }
                            <span onClick={signOut} >Sair</span>
                        </button>
                    </div>
                </nav>

                    {
                        user?.role == "admin" ? 
                        <button id="btn-order" type="button">
                            <span className="btn-order-txt">Novo Prato</span>
                        </button>
                        :
                        <button id="btn-order" type="button">
                            <img src={receiptIcon} alt="" />
                            <span className="btn-order-txt">Pedidos</span>
                            <span className="btn-order-qtd">{items}</span>
                        </button>
                    }      

                <button id="exit" className="no-bg" onClick={signOut}>
                    <img src={logoutIcon} alt="Sair da aplicação" />
                </button>
                
            </div>
            


        </Container>
    )
};