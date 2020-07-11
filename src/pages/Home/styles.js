import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const VideoContainer = styled.div`
    position: relative;
    display: block;
`;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    margin: 0px auto;
`;

export const Video = styled.video`
    width: 100%;
    height: 500px;
    object-fit: cover;
    box-shadow: 0 2px 10px 5px #2d0974;
`;

export const LogoImage = styled.img`
    position: absolute;
    bottom: 50px;
    align-self: top;
    min-height: 50%;
    max-width: 90%;
`;
