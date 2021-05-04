import React from 'react'
import {Footer, ContactContainer, ContactContent, H2,Email,Address, GitHubLink} from './ContactElements';

const Contact = () => {
    return (
        <Footer id="contact">
            <ContactContainer>
               <ContactContent>
                    <H2>Design by <GitHubLink target="_blank" href="https://github.com/kadirretir">©Kadir Üretir</GitHubLink></H2>
                    <Email href="mailto: kadirramazan344@gmail.com">kadirramazan344@gmail.com</Email>
                    <Address>Kadıköy/İstanbul</Address>
               </ContactContent>
            </ContactContainer>
        </Footer>
    )
}

export default Contact
