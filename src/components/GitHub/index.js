import React from 'react'
import {GitHubSection, GitHubContainer, GtH1, GitHubContent,ContentLeft, ContentRight,P, LinkHub } from './GitHubElements';
import {FaGithub} from 'react-icons/fa';

const GitHub = () => {
    return (
        <GitHubSection id="github">
            <GitHubContainer>
                <GtH1> - GitHub Profilime Göz Atın - </GtH1>

                <GitHubContent>
                    <ContentLeft>
                        <FaGithub/>
                    </ContentLeft>

                    <ContentRight>
                        <P>
                            Bu sitedeki kodlar ve diğer projelerdeki kodlar benim
                            tarafımdan yazılmıştır. Kodları ve içerikleri 
                            görmek için <LinkHub target="_blank" href="https://github.com/kadirretir">GitHub</LinkHub> profilime bakabilirsiniz.
                        </P>
                    </ContentRight>
                </GitHubContent>
            </GitHubContainer>
        </GitHubSection>
    )
}

export default GitHub
