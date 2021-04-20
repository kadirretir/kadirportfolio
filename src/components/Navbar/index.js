import React, { useState, useEffect } from 'react';
import { Nav, Container, NavLogo, Ul, Li, NavLink, Hamburger } from './NavbarElements';
import { ReactComponent as ReactSVG } from '../../images/Svg.svg';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    /* Close the menu when the menu resizes from the client width at 1200px or less to a state greater than 1200px */

    const handleResize = () => {
        let clientWidth = document.documentElement.clientWidth;
        let innerWidth = window.innerWidth;

        if (clientWidth >= 1200 || innerWidth >= 1200) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, [])


    //  CLOSE THE MENU WHEN A CLİCKED EVENT HAPPENED OUTSİDE THE MENU LIST  //
    const handleOutClick = (e) => {
        const Header = document.getElementById("header");
        const List = document.getElementById("list");
        document.addEventListener("click", (e) => {
            const isClickInside = List.contains(e.target);
            const isClickHeader = Header.contains(e.target);

            if (!isClickInside && !isClickHeader) {
                setIsOpen(false);
            }
            e.stopPropagation();
        });

    }

    useEffect(() => {
        handleOutClick();
    })

    // SCROLL ANIMATION SETTINGS  ///

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
        <Nav id="header">
            <Container>
                <NavLogo to="header" onClick={scrollTop}>
                    <ReactSVG /> KADIRRETIR
                   </NavLogo>
                <Hamburger id="hamburger" onClick={handleOpen} >
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Ul id="list" isOpen={isOpen}>
                    <Li><NavLink to="header" onClick={scrollTop}>Anasayfa</NavLink></Li>
                    <Li><NavLink to="projects" {...standartScroll}>Projeler</NavLink></Li>
                    <Li><NavLink to="github"  {...standartScroll}>GitHub</NavLink></Li>
                    <Li><NavLink to="about"  {...standartScroll}>Hakkımda</NavLink></Li>
                    <Li><NavLink to="contact"  {...standartScroll}>İletişim</NavLink></Li>
                </Ul>
            </Container>
        </Nav>
    )
}

export default Navbar

