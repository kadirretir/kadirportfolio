import React from 'react'
import {Footer, ContactContainer, ContactContent, H2,Email,Address } from './ContactElements';
const Contact = () => {
    return (
        <Footer id="contact">
            <ContactContainer>
               <ContactContent>
                    <H2>©Kadir Üretir</H2>
                    <Email href="mailto: kadirramazan344@gmail.com">kadirramazan344@gmail.com</Email>
                    <Address>Kadıköy/İstanbul</Address>
               </ContactContent>
            </ContactContainer>
        </Footer>
    )
}

export default Contact
