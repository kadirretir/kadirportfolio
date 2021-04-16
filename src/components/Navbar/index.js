import React, {useState, useEffect} from 'react'
import { Nav, Container, NavLogo, Ul, Li, NavLink, Hamburger } from './NavbarElements'
import {ReactComponent as ReactSVG} from '../../images/Svg.svg';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleResize = () => {
        let clientWidth = document.documentElement.clientWidth;
        let innerWidth = window.innerWidth;

        if(clientWidth >= 1200 || innerWidth >= 1200 ) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, [])


    return (
        <Nav>
            <Container>  
               <NavLogo to="/"><ReactSVG/> KADIRRETIR</NavLogo>
                <Hamburger onClick={handleOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
               <Ul isOpen={isOpen}>
                   <Li><NavLink to="/">Anasayfa</NavLink></Li>
                   <Li><NavLink to="/projects">Projeler</NavLink></Li>
                   <Li><NavLink to="/contact">İletişim</NavLink></Li>
               </Ul>
            </Container>
        </Nav>
    )
}

export default Navbar
