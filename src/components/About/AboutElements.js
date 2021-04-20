import styled from 'styled-components';

export const AboutSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const AboutContainer = styled.div`
width: 80%;
margin: 0 auto;
display: grid;
min-height: 50vh;
text-align: center;
grid-template-areas: 'heading'
                     'p';
 @media screen and (max-width: 280px) {
    width: 90%;
}
`

export const Heading = styled.div`
align-self: center;
justify-self: center;
`

export const H1 = styled.h1`
font-size: 5rem;
color: var(--primary-color);
font-family: var(--secondary-font);
margin-bottom: 2rem;
@media screen and (max-width: 768px) {
    font-size: 3.1rem;
}
`

export const H2 = styled.h2`
font-family: var(--secondary-font);
font-size: 2.5rem;
color: var(--fourth-color);
margin-bottom: 4rem;

@media screen and (max-width: 768px) {
    font-size: 2rem;
}
`

export const HeadingIcon = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
& svg {
    font-size: 8rem;
    cursor: pointer;
    color: var(--fourth-color);
}
margin-bottom: 4rem;

@media screen and (max-width: 768px) {
    & svg {
        font-size: 5rem;
    }
}
`

export const P = styled.p`
width: 80%;
font-size: 2.5rem;
align-self: flex-start;
justify-self: center;
grid-area: p;
color: var(--fourth-color);
font-weight: 300;
word-spacing: 2px;
@media screen and (max-width: 768px) {
    width: 100%;
    font-size: 2.4rem;
    word-spacing: 0;
}

@media screen and (max-width: 576px) {
    font-size: 2.2rem;
}

`