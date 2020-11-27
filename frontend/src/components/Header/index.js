import React from 'react';
import { Logo, HeaderContainer } from './styles';

import Icone from '../../assets/pitu.jpg';

function Header(props) {
    return (
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='Pitú Shortened URL'/>
                <h1>Pitú</h1>
                <p>{props.children}</p>
            </HeaderContainer>
        </>
    )
}

export default Header;