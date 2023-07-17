import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { General, Header, FooterScrollable } from "@components";
import Menu from "../../../Menu";
import * as Sections from "./sections";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import * as Components from '../components'
import { KOTAK_NET_IMAGES } from "@images";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

function KotakNet() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { state: body } = useLocation();
  const isWideScreen = window.innerWidth > 1920;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef} >
          {
            <General.CanvasContainer isWideScreen={isWideScreen}>
              <Section className="kotaknetdetail font-graphik text-[16px] laptop:text-[28px] text-[#B1B1B1] bg-black">
                <div className="w-full">
                  <Components.IntroPage2
                    id="kotaknetsec1"
                    rect={body ? body.rect : null}
                    navigate={navigate}
                    title='Kotak Netbanking'
                    subtitle='Script, Screenplay & Copy'
                    visualComponent={Sections.Sec1}
                    cover={KOTAK_NET_IMAGES.cover}
                  />
                  <Components.Overview
                    id="kotaknetsec2"
                    image={KOTAK_NET_IMAGES.info}
                    description="Spike Stream’s task was to narrate stories about people that were pertinent to all the services provided by Kotak. These stories, presented as animations, were showcased on the Net-banking landing page."
                  />
                  <Components.GlanceGrid
                    id="kotaknetsec3"
                    listItems={[
                      'Concept',
                      'Story',
                      'Screenplay',
                      'Copy',
                      'Creative Direction',
                      'Art Direction',
                    ]}
                  />
                  <Components.VideoPage
                    id="kotaknetsec4"
                    video={KOTAK_NET_IMAGES.video1}
                    hasTopBorder={true}
                    hasBottomBorder={true}
                    backgroundColor={'background'}
                  />
                  <Components.VideoPage
                    id="kotaknetsec5"
                    video={KOTAK_NET_IMAGES.video2}
                    hasTopBorder={true}
                    hasBottomBorder={true}
                    backgroundColor={'background'}
                  />
                  <Components.VideoPage
                    id="kotaknetsec6"
                    video={KOTAK_NET_IMAGES.video3}
                    hasTopBorder={true}
                    hasBottomBorder={true}
                    backgroundColor={'background'}
                  />
                  <Components.VideoPage
                    id="kotaknetsec7"
                    video={KOTAK_NET_IMAGES.video4}
                    hasTopBorder={true}
                    hasBottomBorder={true}
                    backgroundColor={'background'}
                  />
                  <Components.VideoPage
                    id="kotaknetsec8"
                    video={KOTAK_NET_IMAGES.video5}
                    hasTopBorder={true}
                    hasBottomBorder={true}
                    backgroundColor={'background'}
                  />
                  <Components.VideoPage
                    id="kotaknetsec9"
                    video={KOTAK_NET_IMAGES.video6}
                    hasTopBorder={true}
                    hasBottomBorder={true}
                    backgroundColor={'background'}
                  />
                  <Components.VideoPage
                    id="kotaknetsec9"
                    video={KOTAK_NET_IMAGES.video7}
                    hasTopBorder={true}
                    hasBottomBorder={true}
                    backgroundColor={'background'}
                  />
                  <Sections.Sec10 />
                  <FooterScrollable css={"bg-black"} />
                </div>
              </Section>
            </General.CanvasContainer>
          }
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default KotakNet;
