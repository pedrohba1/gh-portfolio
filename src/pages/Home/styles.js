import styled from "styled-components";

export const Container = styled.div`
    z-index: 1;

    width: 100%;
    height: 100%;
    text-align: center;
`;

export const VideoContainer = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
`;

export const Overlay = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    height: 100%;
    align-content: center;
    justify-content: center;
    resize: initial;
`;

export const Video = styled.video`
    width: 100%;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 25%;
    align-self: center;
    border-radius: 5px;
    text-align: center;
    justify-content: center;
    align-items: center;

    border: 2px solid #fff;
`;
