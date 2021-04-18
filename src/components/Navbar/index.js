import React, {useState, useEffect} from 'react'
import { Nav, Container, NavLogo, Ul, Li, NavLink, Hamburger } from './NavbarElements'
import {ReactComponent as ReactSVG} from '../../images/Svg.svg';
import {animateScroll as scroll} from 'react-scroll';
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

    const scrollTop = () => {
        scroll.scrollToTop(standartScroll);
    }

    const standartScroll = {
        spy: true,
        smooth: true,
        hashSpy: true,
        offset: 50,
        duration: 400,
        delay: 100,
        isDynamic: true,
        ignoreCancelEvents: false
    }

    return (
        <Nav>
            <Container>  
               <NavLogo onClick={scrollTop}>
                   <ReactSVG/> KADIRRETIR
                   </NavLogo>
                <Hamburger onClick={handleOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
               <Ul isOpen={isOpen}>
                   <Li><NavLink onClick={scrollTop}>Anasayfa</NavLink></Li>
                   <Li><NavLink to="projects" {...standartScroll}>Projeler</NavLink></Li>
                   <Li><NavLink href="#contact">İletişim</NavLink></Li>
               </Ul>
            </Container>
        </Nav>
    )
}

export default Navbar
