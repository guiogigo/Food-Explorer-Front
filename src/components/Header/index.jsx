import { Container, Profile } from "./styles";
import { FiSearch, FiList, FiX } from 'react-icons/fi'

import { Button } from '../Button/index.jsx'
import { Input } from "../Input/index.jsx";

import rocketIcon from '../../assets/rocket-icon.svg';
import logoutIcon from '../../assets/logout-icon.svg';
import receiptIcon from "../../assets/receipt-icon.svg"
import { useRef } from "react";


export function Header() {
    const navRef = useRef()

    function toggleNavbar(e) {
        console.log('toggleNavbar', e.target);
        navRef.current.classList.toggle('mobile-menu');
    }

    return(
        <Container>
            <button className="menu no-bg" onClick={toggleNavbar}>
                <FiList id="menu-img" size={24}/>
            </button>

            <Profile>
                <img src={rocketIcon} alt="" />
                <div>
                    <h1>food explorer</h1>
                    <span>admin</span>
                </div>
            </Profile>

            <div className="navBar">
                <nav ref={navRef}>
                    <button className="menu no-bg" onClick={toggleNavbar}>
                        <FiX size={24}/>
                        Menu
                    </button>

                    <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>

                    <button className="mobile-button">
                        <span>Sair</span>
                    </button>
                </nav>

                <button id="btn-order" type="button">
                    <img src={receiptIcon} alt="" />
                    <span className="btn-order-txt">Pedidos</span>
                    <span className="btn-order-qtd">0</span>
                </button>

                <button id="exit" className="no-bg">
                    <img src={logoutIcon} alt="Sair da aplicação" />
                </button>
                
            </div>
            


        </Container>
    )
};