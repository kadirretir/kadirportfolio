import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

// NAV STYYLES //
export const Nav = styled.nav`
position: fixed;
top: 0;
min-height: 8rem;
background-color: var(--fourth-color);
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
z-index: 90;


`
// CONTAINER STYLES  //
export const Container = styled.div`
margin: 0 auto;
width: 80%;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 1200px) {
    width: 90%;
}
`

// LOGO STYLES //
export const NavLogo = styled(LinkS)`
color: var(--secondary-color);
font-size: 2.7rem;
letter-spacing: 0.3rem;
text-decoration: none;
user-select: none;
cursor: pointer;
@media screen and (max-width: 1200px) {
    font-size: 2.5rem;
}
`


// RESPONSIVE HAMBURGER STYLES //
export const Hamburger = styled.div`
display: flex;
flex-direction: column;
position: absolute;
right: 0;
margin-right: 3rem;
cursor: pointer;
display: none;
-webkit-tap-highlight-color: transparent;


span {
    transition: all .2s ease-in-out;
    height: 4px;
    width: 27px;
    background: var(--primary-color);
    margin-bottom: 4px;
    border-radius: 5px; 
}

@media screen and (max-width: 1200px){
    display: flex;

}
`


// UL LIST  //
export const Ul = styled.ul`
width: 25%;
display: flex;
justify-content: space-between;
align-items: center;
transition: right 0.3s ease-in;
@media screen and (max-width: 1200px) {
    overflow:hidden;
    position: absolute;
    right: ${({isOpen}) => (isOpen ? "0" : "-100%;")}; 
    top: 80px;
    width: 100%;
    background: rgba(132, 84, 96, 0.9);

    flex-direction: column;
}  
`


// LİST ELEMENTS  //
export const Li = styled.li`
margin-right: 1rem;
&:last-of-type {
margin-right: 0;
}
text-align: center;
@media screen and (max-width: 1200px) {
    width: 100%;
    margin-right: 0;
}
`


// NAV LINKS  //
export const NavLink = styled(LinkS)`
cursor: pointer;
font-size: 2rem;
font-family: var(--secondary-font);
font-weight: 400;
color: var(--secondary-color);
transition: var(--general-transition);
&:hover {
color: var(--third-color);
}

@media screen and (max-width: 1200px) {
    font-size: 1.7rem;
    display: block;
    width: 100%;
    height: 100%;
    padding: 2rem;
    transition: none;
     &:hover {
        background-color: var(--fourth-color)
    }
}   
`

