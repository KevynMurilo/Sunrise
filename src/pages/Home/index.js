import React, { useState } from "react";
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
    Button,
    ContainerAnimations,
    SocialIcons,
    ImgIconPrincipal,
    ImgIcons,
    Wave,
    ImgWave


} from "./style";
import VideoPlayer from "../../components/VideoPlayer";


import IconInsta from '../../assets/instagram.svg'
import IconWpp from '../../assets/wpp.svg'
import IconLocalization from '../../assets/localization.svg'

import FuteboldeAreia from '../../assets/futebolareia.png';
import BeachTenis from '../../assets/beachtenis.png';
import Volei from '../../assets/volei.png';
import Peteca from '../../assets/petaca.png';
import Frisbee from '../../assets/frisbee.png';
import IconBase from '../../assets/IconPrincipal.jpeg';
import Raquete from '../../assets/raquete.png';


import ImageBottom from '../../assets/wave.svg'


export default function Home(){
    const [showPlayer, setShowPlayer] = useState(false);
    const videoUrl = 'https://youtube.com/shorts/NCkM8jGUov8?feature=share'; 

    const handleClick = () => {
        setShowPlayer(true);
    };

    const handleCloseClick = () => {
        setShowPlayer(false);
    };

    return(
        <Container>
            <ContainerNavBar>
                <TitleLogo>SunRise</TitleLogo>

                <ContainerIconsLinks>
                    <a href="https://www.instagram.com/sunriseesportesdeareia/">
                    <Links><ImgLink src={IconInsta}/></Links>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=5561999952832&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+arena.&type=phone_number&app_absent=0">
                    <Links><ImgLink src={IconWpp}/></Links>
                    </a>
                    <a href="https://www.google.com/maps/dir/-15.5440504,-47.3217262/Sunrise+Esportes+de+Areia/@-15.5515786,-47.3359572,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x9350a3e625cdc391:0x10d172548739dcc5!2m2!1d-47.3280639!2d-15.5592403?entry=ttu">
                    <Links><ImgLink src={IconLocalization}/></Links>
                    </a>
                </ContainerIconsLinks>
            </ContainerNavBar>

            <Content>
                <ContainerText>
                        <Text>Nossa arena oferece uma <Span>experiência única para todos os amantes do esporte.</Span> Com instalações de alta qualidade e uma atmosfera vibrante, proporcionamos o cenário perfeito para jogar, aprender e se divertir.</Text>
                        <Button onClick={handleClick}>PLAY</Button>
                        {showPlayer && <VideoPlayer url={videoUrl} onClose={handleCloseClick} />} 
                </ContainerText>

                <ContainerAnimations>
                    <SocialIcons>
                        <ImgIcons src={FuteboldeAreia} alt="Social1"/>
                        <ImgIcons src={BeachTenis} alt="Social2"/>
                        <ImgIcons src={Volei} alt="Social3"/>
                        <ImgIcons src={Peteca} alt="Social4"/>
                        <ImgIcons src={Frisbee} alt="Social5"/>
                        <ImgIcons src={Raquete} alt="Social5"/>
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
