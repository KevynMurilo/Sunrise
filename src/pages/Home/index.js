import React from "react";
import { 
    Container,
    ContainerNavBar,
    TitleLogo,
    ContainerIconsLinks,
    Links,
    ImgLink,
    Content,
    ContainerText,
    Span,
    Text,
    ContainerAnimations,
    SocialIcons,
    ImgIconPrincipal,
    ImgIcons,
    Wave,
    ImgWave


} from "./style";

import IconInsta from '../../assets/instagram.svg'
import IconWpp from '../../assets/wpp.svg'
import IconLocalization from '../../assets/localization.svg'

import FuteboldeAreia from '../../assets/futebolareia.png';
import BeachTenis from '../../assets/beachtenis.png';
import Volei from '../../assets/volei.png';
import Peteca from '../../assets/petaca.png';
import Frisbee from '../../assets/frisbee.png';
import IconBase from '../../assets/IconPrincipal.jpeg';


import ImageBottom from '../../assets/wave.svg'


export default function Home(){
    return(
        <Container>
            <ContainerNavBar>
                <TitleLogo>SunRise</TitleLogo>

                <ContainerIconsLinks>
                    <a href="">
                    <Links><ImgLink src={IconInsta}/></Links>
                    </a>
                    <a href="">
                    <Links><ImgLink src={IconWpp}/></Links>
                    </a>
                    <a href="">
                    <Links><ImgLink src={IconLocalization}/></Links>
                    </a>
                </ContainerIconsLinks>
            </ContainerNavBar>

            <Content>
                <ContainerText>
                        <Text>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in <Span>laying out print</Span>, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                </ContainerText>

                <ContainerAnimations>
                    <SocialIcons>
                        <ImgIcons src={FuteboldeAreia} alt="Social1"/>
                        <ImgIcons src={BeachTenis} alt="Social2"/>
                        <ImgIcons src={Volei} alt="Social3"/>
                        <ImgIcons src={Peteca} alt="Social4"/>
                        <ImgIcons src={Frisbee} alt="Social5"/>
                    </SocialIcons>
                    <ImgIconPrincipal src={IconBase} alt="EmailIcon"/>

                </ContainerAnimations>

            </Content>

            <Wave>
                <ImgWave src={ImageBottom} alt="ImageBottom"/>
            </Wave>
        </Container>
    )
}
