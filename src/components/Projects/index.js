import React from 'react'
import reacthotel from '../../images/reacthotel.png';
import reactnetflix from '../../images/reactnetflix.png';
import reduxecommerce from '../../images/reduxecommerce.png';
import kadirportfolio from '../../images/kadirportfolio.png';
import { FaCode } from 'react-icons/fa';
import { RiPagesLine } from 'react-icons/ri';
import {
    Projects,
    ProjectsContainer,
    Cards,
    Card,
    Img,
    CardBody,
    ImgWrapper,
    CardMiddle,
    H3,
    P,
    PageLink,
    Buttons,
    CardLink
} from './ProjectsElements';

const Aboutme = () => {

    return (
        <>
            <Projects id="projects">
                <ProjectsContainer>
                    <Cards>

                        <Card>
                            <ImgWrapper>
                                <CardLink target="_blank" href="http://kadirretir.github.io/react-hotel">
                                    <Img src={reacthotel} width="646" height="360" alt="hotelproject" />
                                </CardLink>
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
                                        <RiPagesLine />SAYFA
                                        </PageLink>

                                    <PageLink target="_blank" href="https://github.com/kadirretir/react-hotel">
                                        <FaCode />KOD
                                        </PageLink>
                                </Buttons>
                            </CardBody>
                        </Card>


                       
                            <Card>
                                <ImgWrapper>
                                <CardLink  target="_blank" href="http://kadirretir.github.io/netflix-clone-react">
                                     <Img src={reactnetflix} width="617" height="360" alt="netflixclone" />
                                    </CardLink>
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
                                            <RiPagesLine /> SAYFA
                                        </PageLink>

                                        <PageLink target="_blank" href="https://github.com/kadirretir/netflix-clone-react">
                                            <FaCode /> KOD
                                        </PageLink>
                                    </Buttons>
                                </CardBody>
                            </Card>
             
                            <Card>
                                <ImgWrapper>
                                <CardLink target="_blank" href="https://kadirretir.github.io/redux-ecommerce/"> 
                                    <Img src={reduxecommerce} width="617" height="360" alt="reduxecommerce" />
                                    </CardLink>
                                </ImgWrapper>
                                <CardBody>
                                    <CardMiddle>
                                        <H3>REACT REDUX ALIŞVERİŞ SEPETİ UYGULAMASI</H3>
                                        <P>
                                            Bu proje Redux state yönetim sistemini kullanarak,
                                            local veri ile sepete ekleme, çıkarma, veriler ile UI'da
                                            koşullu render işlemler gerçekleştirme ve verileri göstermeyi
                                            içeriyor.
                                  </P>
                                    </CardMiddle>
                                    <Buttons>
                                        <PageLink target="_blank" href="https://kadirretir.github.io/redux-ecommerce/">
                                            <RiPagesLine /> SAYFA
                                        </PageLink>

                                        <PageLink target="_blank" href="https://github.com/kadirretir/redux-ecommerce">
                                            <FaCode /> KOD
                                        </PageLink>
                                    </Buttons>
                                </CardBody>
                            </Card>
                       
                            <Card>
                                <ImgWrapper>
                                <CardLink target="_blank" href="https://github.com/kadirretir/kadirportfolio"> 
                                    <Img src={kadirportfolio} width="617" height="360" alt="portfolio" />
                                    </CardLink>
                                </ImgWrapper>
                                <CardBody>
                                    <CardMiddle>
                                        <H3>PORTFOLİO SİTESİ</H3>
                                        <P>
                                            Bu proje beni, benim kim olduğumu, yaptığım siteleri,
                                            bildiğim teknolojileri ve kim olduğumu yansıtıyor.
                                            Proje React ile SPA olarak styled components'ler kullanılarak
                                            oluşturuldu.
                                  </P>
                                    </CardMiddle>
                                    <Buttons>
                                        <PageLink target="_blank" href="https://kadirretir.github.io/kadirportfolio/">
                                            <RiPagesLine /> SAYFA
                                        </PageLink>

                                        <PageLink target="_blank" href="https://github.com/kadirretir/kadirportfolio">
                                            <FaCode /> KOD
                                        </PageLink>
                                    </Buttons>
                                </CardBody>
                            </Card>
                     
                    </Cards>

                </ProjectsContainer>
            </Projects>
        </>
    )
}

export default Aboutme
