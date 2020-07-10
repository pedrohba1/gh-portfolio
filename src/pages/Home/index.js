import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PixPlugin from "gsap/PixiPlugin";

import LazyLoad from "react-lazy-load";
import { VideoContainer, Container, Video, Overlay, Card } from "./styles";

import banner from "~/assets/banner.mp4";

function Home() {
    let videoRef = useRef(null);

    let cardRef = useRef(null);

    useEffect(() => {
        gsap.from(cardRef, 5, { x: 700, ease: "power3" });
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
                    <Card
                        ref={(el) => {
                            cardRef = el;
                        }}
                    >
                        <h1> Welcome to my personal portfolio</h1>
                        <h3>
                            These are all my projects done until recent day.
                        </h3>
                    </Card>
                </Overlay>
            </VideoContainer>
        </Container>
    );
}

export default Home;
