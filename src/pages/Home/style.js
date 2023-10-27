import styled, { keyframes } from "styled-components";
import WaveBack from '../../assets/wave.svg';


export const Container = styled.div`
    margin-left: 80px;
    margin-right: 80px;

    @media (max-width: 768px) {
        margin: 0 20px 0 20px;
}
`;

export const ContainerNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

`;


export const TitleLogo = styled.h1`
    font-size: 4vw;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 9vw;
}
`;

export const ContainerIconsLinks = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const slideIn = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`;

export const Links = styled.li`
    margin-left: 60px;
    text-decoration: none;
    list-style: none;
    display: inline-block;
    position: relative;   

    @media (max-width: 768px) {
        margin: 10px;
}

    &:hover {
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #f09053;
            animation: ${slideIn} 0.3s forwards;
        }
    }
    
`;


export const ImgLink = styled.img`
    width: 2.6vw;
    @media (max-width: 768px) {
        width: 8vw;
}
`;


export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px 0; 

    @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 0; 
}
`;


export const ContainerText = styled.div`
    width: 100%;
    max-width: 50%; 
    @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
}

`;

export const Text = styled.h1`
    font-size: 1.5vw;
    line-height: 5vh;
    color: #fff;
    text-align: justify;

    @media (max-width: 768px) {
    font-size: 2.5vh;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
}  
`;

export const Span = styled.span`
    color: #f09053;
`;


export const ContainerAnimations = styled.div`
    position: relative;
    width: 40%; 
    max-width: 400px; 
    aspect-ratio: 1 / 1; 
    background: radial-gradient(520px, #f08f538c, transparent 50%);
    margin-top: 5%; 
    border-radius: 50%;
    @media (max-width: 768px) {
        width: 50%;
        margin-top: 5%;
        z-index: 999;
}
`;

const rotation = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const SocialIcons = styled.div`
    height: 100%;
    animation: ${rotation} 60s linear infinite;
`;

export const ImgIconPrincipal = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    border-radius: 50%;
`;

export const ImgIcons = styled.img`
    width: 15%;
    position: absolute;
    &:nth-child(1) {
        top: 0;
        left: 42%;
    }
    &:nth-child(2) {
        top: 25%;
        right: 0;
    }
    &:nth-child(3) {
        top: 70%;
        left:70;
    }
    &:nth-child(4) {
        top: 25%;
        left: 0;
    }
    &:nth-child(5) {
        top: 70%;
        left: 80%;
    }
    &:nth-child(6) {
        top: 90%;
        right: 42%;
    }
`;

const waveOne = keyframes`
    50% {
        background-position: 0 0;
    }
`;

export const Wave = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    line-height: 0;
    
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        background: url(${WaveBack}) repeat-x;
        background-size: cover;
        background-position: -1000px 0;
        opacity: 0.2;
        animation: ${waveOne} 60s linear infinite;
    }

    @media (max-width: 768px) {
    width: 100vw;
}
`;



export const ImgWave = styled.img`
    width: 100%;
    bottom: 0;
    left: 0;
    line-height: 0;
    
`;
