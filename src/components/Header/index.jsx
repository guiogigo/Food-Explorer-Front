import { Container, Profile, Menu } from "./styles";
import { FiSearch, FiList } from 'react-icons/fi'

import { Button } from '../Button/index.jsx'
import { Input } from "../Input/index.jsx";

import rocketIcon from '../../assets/rocket-icon.svg';
import logoutIcon from '../../assets/logout-icon.svg';
import receiptIcon from "../../assets/receipt-icon.svg"


export function Header() {
    return(
        <Container>
            <Menu>
                <FiList/>
            </Menu>
            <Profile>
                <img src={rocketIcon} alt="" />
                <div>
                    <h1>food explorer</h1>
                    <span>admin</span>
                </div>
            </Profile>
            <div className="desktop">
                <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>

                <Button icon={receiptIcon} text={"Pedidos"}/>

                <img src={logoutIcon} alt="" />
            </div>
            <div className="mobile">
                <img src={receiptIcon} alt=""/>
            </div>


        </Container>
    )
};