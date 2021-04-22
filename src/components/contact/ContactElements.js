import styled from 'styled-components';

export const Footer = styled.footer`
min-height: 12vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
background-color: var(--third-color);
@media screen and (max-width: 1200px) {
    min-height: 20vh;
}
`

export const ContactContainer = styled.div`
width: 80%;
min-height: 12vh;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 1200px) {
    min-height: 20vh;
}

`

export const ContactContent = styled.div`
display: grid;
grid-template-areas: '. email'
                     'copyright adres';
width: 100%;

justify-content: space-around;
font-family: var(--secondary-font);
@media screen and (max-width: 1200px) {
    grid-template-areas: 'email'
                         'copyright'
                         'adres';
    grid-row-gap: 1rem;
    text-align: center;
}
`

export const H2 = styled.h2`
color: var(--primary-color);
grid-area: copyright;
font-size: 2.5rem;

@media screen and (max-width: 1200px) {
    font-size: 2.1rem;
}
`

export const Email = styled.a`
color: var(--fourth-color);
font-size: 2.5rem;
grid-area: email;
@media screen and (max-width: 1200px) {
    font-size: 2.1rem;
}

`

export const Address = styled.h2`
color: var(--fourth-color);
grid-area: adres;
@media screen and (max-width: 1200px) {
    font-size: 1.6rem;
}
`