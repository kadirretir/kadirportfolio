import styled from 'styled-components';

export const GitHubSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 40vh;
`

export const GitHubContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px) {
 width: 100%;
}
`

export const GtH1 = styled.h1`
font-size: 5rem;
color: var(--primary-color);
font-family: var(--secondary-font);
margin-bottom: 2rem;
margin-top: 2rem;
margin-bottom: 5rem;

@media screen and (max-width: 768px) {
    font-size: 3.1rem;
}
`

export const GitHubContent = styled.div`
width: 50%;
min-height: 30vh;
display: grid;
grid-template-columns: 50% 50%;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    width: 80%;
    min-height: 70vh;
    grid-row-gap: 6rem;
    
}

@media screen and (max-width: 1024px) {
    min-height: 45vh;
    grid-row-gap: 0;
}

@media screen and (max-width: 768px) {
    min-height: 50vh;
    grid-row-gap: 3rem;
}

@media screen and (max-width: 280px) {
    width: 90%;
}


`

export const LinkHub = styled.a`
color: var(--primary-color);
text-decoration: underline;
`

export const ContentLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;
& svg {
    font-size: 25rem;
    color: var(--fourth-color);
}

@media screen and (max-width: 768px) {
& svg {
    font-size: 23rem;
}
}
`

export const ContentRight = styled.div`
@media screen and (max-width: 1200px) {
    width: 100%;
    text-align: center;
}
`

export const P = styled.p`
font-size: 2.5rem;
color: var(--fourth-color);

@media screen and (max-width: 768px) {
    font-size: 2rem;
}
`

