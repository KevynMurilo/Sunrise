import styled, { keyframes } from "styled-components";

import WaveBack from '../../assets/wave.svg';

export const Container = styled.div`
    margin-left: 80px;
    margin-right: 80px;
`;

export const ContainerNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

`;


export const TitleLogo = styled.h1`
    font-size: 80px;
    color: #fff;
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
    width: 50px;
`;


export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px 100px 0; 
`;


export const ContainerText = styled.div`
    width: 50%;
    padding-right: 150px;
    margin-top: 100px;
`;

export const Span = styled.span`
    color: #f09053;
`;

export const Text = styled.h1`
    font-size: 28px;
    line-height: 46px;
    color: #fff;

`;

export const ContainerAnimations = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    background: radial-gradient(520px, #f08f538c, transparent 50%);
    margin-top: 50px;
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
    width: 200px;
    border-radius: 50%;
`;

export const ImgIcons = styled.img`
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
`;
const waveOne = keyframes`
    50% {
        background-position: 0 0;
    }
`;

export const Wave = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: 0;
    
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${WaveBack}) repeat-x;
        background-size: cover;
        background-position: -1000px 0;
        opacity: 0.2;
        animation: ${waveOne} 60s linear infinite;
    }
`;



export const ImgWave = styled.img`
    width: 100%;
    bottom: 0;
    left: 0;
    line-height: 0;
`;
