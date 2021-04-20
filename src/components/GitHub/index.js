import React from 'react'
import {GitHubSection, GitHubContainer, GtH1, GitHubContent,ContentLeft, ContentRight,P, LinkHub } from './GitHubElements';
import {FaGithub} from 'react-icons/fa';

const GitHub = () => {
    return (
        <GitHubSection id="github">
            <GitHubContainer>
                <GtH1> - Bu sitenin kodlarına göz atın - </GtH1>

                <GitHubContent>
                    <ContentLeft>
                        <FaGithub/>
                    </ContentLeft>

                    <ContentRight>
                        <P>
                            Bu sayfadaki kodların ve diğer tüm projelerimdeki kodların 
                             yazımı bana aittir. İsterseniz sitelerin kodlarını ve nasıl 
                             oluştuğunu görmek için <LinkHub target="_blank" href="https://github.com/kadirretir">GitHub</LinkHub> profilime bakabilirsiniz.
                        </P>
                    </ContentRight>
                </GitHubContent>
            </GitHubContainer>
        </GitHubSection>
    )
}

export default GitHub
