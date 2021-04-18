import React from 'react';
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';

import {
    Header,
    Container,
    StyledSlider,
    HeroContent,
    H1,
    Paragraf,
    HeroContainer,
    TalentRow,
    TalentColumn
} from './HeroElements';



const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 4000 
};


const Hero = () => {
    return (
        <Header>
            <Container>

                <StyledSlider {...settings}>
                    <HeroContent>
                        <HeroContainer >
                            <H1>PROJELER</H1>
                            <Paragraf>
                               İşimi özenle yapan ve ciddiye alan biriyim.
                               Aşağıda çalışmalarımı görebilirsiniz.
                               </Paragraf>
                        </HeroContainer>
                    </HeroContent>

                    <HeroContent>
                        <HeroContainer >
                            <H1>YETENEKLER</H1>
                            <Paragraf>
                                <TalentRow>
                                    <TalentColumn><FaHtml5 />HTML5</TalentColumn>
                                    <TalentColumn><FaCss3 />CSS3-SASS</TalentColumn>
                                    <TalentColumn><SiJavascript />JAVASCRIPT</TalentColumn>
                                    <TalentColumn><FaReact />REACTJS</TalentColumn>
                                </TalentRow>
                            </Paragraf>
                        </HeroContainer>
                    </HeroContent>
                </StyledSlider>

            </Container>
        </Header>
    )
}


export default Hero;






