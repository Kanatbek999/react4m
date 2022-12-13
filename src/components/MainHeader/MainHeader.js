import React from "react";
import './mainheader.css'
import logo from '../../image/logo.svg'
import logo1 from '../../image/logo1.svg'
import logo2 from '../../image/logo2.svg'
import logotip from '../../image/logotip.svg'


const MainHeader = () => {
    return (
        <div className="container">
            
            <ul className="menu__list">
                <li>Shop</li>
                <li>style quiz</li>
                <li>about us</li>
                <li>stories</li>
            </ul>

             <img className="logotip" src={logotip}/>

        <div className="header__logo">
            <img  src={logo}/>
            <img  src={logo1}/>
            <img  src={logo2}/>
    </div>
            
        </div>
    )
}

export default MainHeader;