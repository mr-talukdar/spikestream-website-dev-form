import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { General, Header, FooterScrollable } from "@components";
import Menu from "../../../Menu";
import * as Sections from "./sections";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import * as Components from '../components'
import { CELESTIAL_IMAGES } from "@images";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

function Celestial() {
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
        watch={
          [

          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          {
            <General.CanvasContainer isWideScreen={false}>
              <Section className="celestialdetail font-graphik text-[16px] laptop:text-[28px] text-[#B1B1B1] bg-black">
                <div className="w-full">
                  <Components.IntroPage
                    id="celestialsec1"
                    rect={body ? body.rect : null}
                    navigate={navigate}
                    title='Celestial\nMountains'
                    subtitle='Concept Prototype'
                    visualComponent={Sections.Sec1}
                    cover={CELESTIAL_IMAGES.cover}
                  />
                  <Components.Overview
                    id="celestialsec2"
                    image={CELESTIAL_IMAGES.mountain}
                    description="At Spike Stream, we enjoy exploring new horizons. We came up with the idea and brought it to life using Adobe XD, resulting in a prototype that is both seamless and visually engaging."
                  />
                  <Components.GlanceGrid
                    id="celestialsec3"
                    listItems={[
                      'Concept',
                      'Image Editing',
                      'Color Corrections',
                      'Content',
                      'UX & UI',
                      'Prototype',
                    ]}
                  />
                  <Components.MobileScreensLayout
                    id="celestialsec4"
                    imageList={[
                      CELESTIAL_IMAGES.mobile1,
                      CELESTIAL_IMAGES.mobile2,
                      CELESTIAL_IMAGES.mobile3
                    ]}
                    hasTopBorder={true}
                    hasBottomBorder={true}
                  />
                  <Components.MobileScreensLayout
                    id="celestialsec5"
                    imageList={[
                      CELESTIAL_IMAGES.mobile4,
                      CELESTIAL_IMAGES.mobile5,
                      CELESTIAL_IMAGES.mobile6
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

export default Celestial;
