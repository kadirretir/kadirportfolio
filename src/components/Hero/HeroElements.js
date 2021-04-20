import styled from 'styled-components'
import stars from '../../images/stars.jpg';
import Slider from "react-slick";

export const Header = styled.header`
background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9)),
url(${stars});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 100%;
min-height: 40vh;
margin-top: 13rem;
position: relative;
@media screen and (max-width: 768px) {
    min-height: 55vh;
}
`

export const Container = styled.div`
margin: 0 auto;
width: 50%;
min-height: 25vh;
background: rgba(132, 84, 96, 0.5);
border-radius: 0.5rem;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

@media screen and (max-width: 1200px) {
    width: 90%;
    
}

 @media screen and (max-width: 768px) {
   min-height: 30vh;
} 
`

export const StyledSlider = styled(Slider)`

.slick-slide div {
  outline: none;
 }

.slick-list {
    padding: 0;
}

.slick-dots {
    & li button::before {
        color: var(--third-color);
        font-size: 1.1rem;
    }
}
`

export const HeroContent = styled.div`
min-height: 25vh;
text-align: center;
font-size: 1.7rem;
@media screen and (max-width: 1200px) {
    font-size: 1.4rem;
}

@media screen and (max-width: 768px) {
   min-height: 30vh;
} 
`
export const HeroContainer = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
position: absolute;
width: 100%;
top: 50%;
min-height: 25vh;
left: 50%;
transform: translate(-50%, -50%);

 @media screen and (max-width: 768px) {
   min-height: 30vh;
} 

`

export const Paragraf = styled.div`
    font-size: 2rem;
    color: var(--third-color) ;
    margin-top: 4rem;
    font-family: var(--secondary-font);

    & svg {
        margin-right: 0.5rem;
        color: var(--secondary-color);
    }
    @media screen and (max-width: 1200px) {
        font-size: 1.7rem;
    }

    @media screen and (max-width: 768px) {
    font-size: 1.5rem;
}
`

export const TalentRow = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
grid-column-gap: 4rem;
align-items: center;
text-align: left;
`

export const TalentColumn = styled.div`
`

export const H1 = styled.h1`
color: var(--secondary-color);
`

