import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { General, Header, FooterScrollable } from "@components";
import Menu from "../../../Menu";

import * as Sections from "./sections";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import * as Components from '../components'
import { ACE_IMAGES } from "@images";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

function Ace() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { state: body } = useLocation();

  const isWideScreen = window.innerWidth > 1920;


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
        <main data-scroll-container ref={containerRef}>
          {
            <General.CanvasContainer isWideScreen={isWideScreen}>
              <Section className="acedetail font-graphik text-[16px] laptop:text-[28px] text-[#B1B1B1] bg-black">
                <div className="w-full">
                  <Components.IntroPage
                    id="acesec1"
                    rect={body ? body.rect : null}
                    navigate={navigate}
                    title='Ace Pay'
                    subtitle='Concept Prototype'
                    visualComponent={Sections.Sec1}
                    cover={ACE_IMAGES.cover}
                  />
                  <Components.Overview
                    id="acesec2"
                    image={ACE_IMAGES.card}
                    description="We explored the potential of enhancing the payments application with visually captivating features and smooth transitions."
                  />
                  <Components.GlanceGrid
                    id="acesec3"
                    listItems={[
                      'Concept',
                      'Visual Design',
                      'Content',
                      'UX & UI',
                      'Interactions',
                      'Prototype',
                    ]}
                  />
                  <Components.MobileScreensLayout
                    id="acesec4"
                    imageList={[
                      ACE_IMAGES.mobile1,
                      ACE_IMAGES.mobile2,
                      ACE_IMAGES.mobile3
                    ]}
                    hasTopBorder={true}
                    hasBottomBorder={true}
                  />
                  <Components.MobileScreensLayout
                    id="acesec5"
                    imageList={[
                      ACE_IMAGES.mobile4,
                      ACE_IMAGES.mobile5,
                    ]}
                    hasTopBorder={true}
                    hasBottomBorder={true}
                  />
                  <Sections.Sec7 />
                  <FooterScrollable skipAnim={true} css={"bg-black"} />
                </div>
              </Section>
            </General.CanvasContainer>
          }
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default Ace;
