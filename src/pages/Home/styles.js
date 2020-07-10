import styled from "styled-components";

export const Container = styled.div`
    z-index: 1;

    width: 100%;
    height: 100%;
    text-align: center;
`;

export const Banner = styled.div`
    width: 100%;
    background: #444;
`;

export const VideoContainer = styled.div`
    z-index: 0;
    display: flex;
`;

export const Overlay = styled.div`
    display: flex;

    align-items: center;
    align-content: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    h1 {
        align-self: center;
        color: #fff;
    }
`;

export const Video = styled.video`
    width: 100%;
    display: block;
`;

export const Navbar = styled.div``;
