import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PixPlugin from "gsap/PixiPlugin";

import LazyLoad from "react-lazy-load";
import { VideoContainer, Container, Video, Overlay } from "./styles";

import banner from "~/assets/banner.mp4";

function Home() {
    let videoRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(PixPlugin);
        gsap.from(videoRef, 1, { webkitFilter: "brightness(0    %)" });
        gsap.to(videoRef, 3, { webkitFilter: "brightness(100%)" });
    });

    return (
        <Container>
            <VideoContainer
                ref={(el) => {
                    videoRef = el;
                }}
            >
                <Video loop autoPlay>
                    <source src={banner} type="video/mp4" />
                    <source src={banner} type="video/ogg" />
                    <track kind="subtitles" srcLang="en" label="English" />
                    Your browser does not support the video tag.
                </Video>

                <Overlay>
                    <h1>teste</h1>
                </Overlay>
            </VideoContainer>
        </Container>
    );
}

export default Home;
