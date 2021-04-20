import styled from 'styled-components';

export const Projects = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ProjectsContainer = styled.div`
width: 80%;
margin: 0 auto;
min-height: 100vh;

@media screen and (max-width: 280px) {
    width: 90%;
}
`

export const Cards = styled.div`
    
    margin: 0 auto;
    min-height: 60vh;
    display: grid;
    width: 100%;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
    grid-row-gap: 5rem;
     @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: 75%;
    }  

    @media screen and (max-width: 768px) {
        grid-row-gap: 2rem;
        width: 100%;
    }

    @media screen and (max-width: 576px) {

        width: 100%;
    }


`

export const Card = styled.div`
    width: 70%;
    align-self: center;
    justify-self: center;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 0.5rem;
    max-height: 46rem;
    transition: transform 0.8s;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
    }

    @media screen and (max-width: 1200px) {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
    } 
`


export const ImgWrapper = styled.div`
    position: relative;
    width: 100%;    
    overflow: hidden;
    background: #3E4756;
    border-radius: 5px 5px 0 0;
    &::after {
        display: block;
        content: "";
        padding-bottom: 56.25%;
    }
`

export const Img = styled.img`
     position: absolute;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
     opacity: 0.8; 
`

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const CardMiddle = styled.div`
width: 90%;
margin: 1rem 0;
min-height: 14rem;

`

export const H3 = styled.h3`
    font-size: 2.1rem;

    color: var(--fourth-color);
    font-family: var(--secondary-font);
`

export const P = styled.p`
    margin: 1rem 0;
    font-size: 1.8rem;
   
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`


export const Buttons = styled.div`
border-bottom-left-radius: 0.5rem;
border-bottom-right-radius: 0.5rem;
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
`

export const PageLink = styled.a`

text-align: center;
width: 100%;
height:4rem;
line-height: 4rem;
font-size: 1.8rem;
color: var(--primary-color);
font-family: var(--secondary-font);
transition: var(--general-transition);
&:hover {
    background-color: var(--secondary-color);
}
`