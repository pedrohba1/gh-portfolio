import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { VideoContainer, Container, Video, Overlay, LogoImage } from "./styles";

import banner from "~/assets/banner.mp4";
import welcome from "~/assets/welcome.png";
import WelcomePt from "~/assets/welcome_pt.png";

function Home() {
    let videoRef = useRef(null);

    let imgRef = useRef(null);

    useEffect(() => {
        gsap.from(imgRef, 5, { x: 700, ease: "power3" });
    });

    return (
        <Container>
            <VideoContainer
                ref={(el) => {
                    videoRef = el;
                }}
            >
                <Video loop autoPlay muted>
                    <source src={banner} type="video/mp4" />
                    <track kind="subtitles" srcLang="en" label="English" />
                    Your browser does not support the video tag.
                </Video>

                <Overlay>
                    <LogoImage
                        ref={(el) => {
                            imgRef = el;
                        }}
                        src={WelcomePt}
                    />
                </Overlay>
            </VideoContainer>

            <h1> teste</h1>
        </Container>
    );
}

export default Home;
