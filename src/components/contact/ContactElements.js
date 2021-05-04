import styled from 'styled-components';

export const Footer = styled.footer`
min-height: 16vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
background-color: var(--primary-color);
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
color: var(--secondary-color);
grid-area: copyright;
font-size: 1.9rem;
font-style: italic;
@media screen and (max-width: 1200px) {
    font-size: 2.1rem;
}
`
export const GitHubLink = styled.a`
color: var(--secondary-color);
transition: all 0.2s ease-in-out;
&:hover {
    color: var(--light-color);
}
letter-spacing: 0.2rem;
font-style: italic;
margin-left: 1rem;
`


export const Email = styled.a`
color: var(--light-color);
font-size: 2.3rem;
margin-bottom: 1rem;
grid-area: email;
@media screen and (max-width: 1200px) {
    font-size: 2.1rem;
}

`

export const Address = styled.h2`
color: var(--secondary-color);
letter-spacing: 0.1rem;
grid-area: adres;
@media screen and (max-width: 1200px) {
    font-size: 1.6rem;
}
`