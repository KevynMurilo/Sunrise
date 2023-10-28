import React from 'react';
import ReactPlayer from "react-player";
import { 
    Container,
    CloseButton
} from './style';

const VideoPlayer = ({ url, onClose  }) => {
    return (
        <Container>
            <CloseButton onClick={onClose}>X</CloseButton>
            <ReactPlayer url={url} controls width="100%" height="100%" />
        </Container>
    );
};

export default VideoPlayer;
