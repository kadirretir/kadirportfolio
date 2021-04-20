import React from 'react'
import {AboutSection, AboutContainer, H1, H2, P, Heading, HeadingIcon } from './AboutElements';
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';


const About = () => {
    return (
        <AboutSection id="about">
            <AboutContainer>
                  <Heading>
                        <H1> - KADİR RAMAZAN ÜRETİR - </H1>
                        <H2>HAKKIMDA</H2>
                        <HeadingIcon>
                            <FaHtml5/>
                            <FaCss3/>
                            <FaReact/>
                            <SiJavascript/>
                        </HeadingIcon>
                    </Heading>
                    <P>
                        Merhaba, benim adım Kadir. İstanbul/Kadıköy'de yaşıyorum.
                        Web geliştirme yolcuğum lisede Bilişim Teknolojileri/Web Tasarım 
                        bölümünü seçmem ile birlikte başladı. O zamandan bu yana
                        Kişisel proje geliştirmek ve denemek ile uğraştım ve 
                        kendimi geliştirmeye çalıştım. Bir süre üniversite hazırlığı
                        ile geçtikten sonra bu işi artık profesyonele dökme kararı vermem 
                        ile nispeten daha büyük ve geliştirirken kendimi de geliştirebileceğim
                        projeler üretmeye başladım. 
                    </P>
            </AboutContainer>
        </AboutSection>
    )
}

export default About
