import React from 'react'
import reacthotel from '../../images/reacthotel.png';
import reactnetflix from '../../images/reactnetflix.png';
import {FaCode} from 'react-icons/fa';
import {RiPagesLine} from 'react-icons/ri';
import {
    About,
    AboutContainer,
    Cards,
    Card,
    Img,
    CardBody,
    ImgWrapper,
    CardMiddle,
    H3,
    P,
    PageLink,
    Buttons
} from './AboutmeElements';

const Aboutme = () => {
 
    return (
        <>
            <About id="projects">
                <AboutContainer>
                    <Cards>
                        <Card>
                            <ImgWrapper>
                                <Img src={reacthotel} width="646" height="360" alt="hotelproject" />
                            </ImgWrapper>
                            <CardBody>
                                <CardMiddle>
                                    <H3>REACT OTEL TANITIM PROJESİ</H3>
                                    <P>
                                        Bu proje Antalya'nın otellerini ve otellerinin
                                        özelliklerini tanıtıyor. Proje Create-React-App
                                        çatısı altında oluşturulmuş, React Router, Context API,
                                        React Hooks kullanılarak SPA şeklinde tasarlanmıştır.
                                 </P>
                                </CardMiddle>
                                <Buttons>
                                    <PageLink target="_blank" href="http://kadirretir.github.io/react-hotel">
                                      <RiPagesLine/>SAYFA
                                        </PageLink>

                                    <PageLink target="_blank" href="https://github.com/kadirretir/react-hotel">
                                    <FaCode/>KOD
                                        </PageLink>
                                </Buttons>
                            </CardBody>
                        </Card>

                        <Card>
                            <ImgWrapper>
                                <Img src={reactnetflix} width="617" height="360" alt="hotelproject" />
                            </ImgWrapper>
                            <CardBody>
                                <CardMiddle>
                                    <H3>NETFLIX SAYFA KLONU</H3>
                                    <P>
                                        Bu proje TMDB API'dan verileri çekip Context API'de
                                        state'e atayarak, oradan UI'a aktarıyor.
                                  </P>
                                </CardMiddle>
                                <Buttons>
                                    <PageLink target="_blank" href="http://kadirretir.github.io/netflix-clone-react">
                                       <RiPagesLine/> SAYFA
                                        </PageLink>

                                    <PageLink target="_blank" href="https://github.com/kadirretir/netflix-clone-react">
                                    <FaCode/> KOD
                                        </PageLink>
                                </Buttons>
                            </CardBody>
                        </Card>
                    </Cards>

                </AboutContainer>
            </About>
        </>
    )
}

export default Aboutme
