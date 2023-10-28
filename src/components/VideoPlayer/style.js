import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    position: absolute;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
}
`;

export const CloseButton = styled.button`
    position: absolute;
    top: -50px;
    right: 10px;
    background-color: #000; 
    border: none;
    font-size: 30px;
    cursor: pointer;
    color: #fff;
    outline: none;
    font-weight: bold;
    padding: 5px 10px; 
    border-radius: 5px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;