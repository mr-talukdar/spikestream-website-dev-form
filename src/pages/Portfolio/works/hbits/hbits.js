import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { General, Header, FooterScrollable } from "@components";
import Menu from "../../../Menu";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import * as Sections from "./sections";
import * as Components from '../components'
import { HBITS_IMAGES } from "@images";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

function Hbits() {
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
        <main data-scroll-container ref={containerRef}>
          {
            <General.CanvasContainer isWideScreen={isWideScreen}>
              <Section className="ketodetail font-graphik text-[16px] laptop:text-[28px] text-[#B1B1B1] bg-black">
                <div className="w-full">
                  <Components.IntroPage
                    id="hbitssec1"
                    width="1/4"
                    rect={body ? body.rect : null}
                    navigate={navigate}
                    title='hBits'
                    subtitle='UX / UI Design &  Social'
                    visualComponent={Sections.HbitsSec1}
                    cover={HBITS_IMAGES.cover}
                  />
                  <Components.Overview
                    id="hbitssec2"
                    image={HBITS_IMAGES.plant}
                    description="Our collaboration with hBits, a prominent player in the Fractional Ownership arena, involved devising their visual and communication style, as well as creating a website catering to both commercial owners and channel partners.
                    And Social Media content and management services."
                  />
                  <Components.GlanceGrid
                    id="hbitssec3"
                    listItems={[
                      'Competitive Analysis',
                      'User Research & Information Architecture',
                      'User Experience',
                      'Usability Testing',
                      'Visual Identity & Visual Design',
                      'Social Media Strategy & Management',
                      'Social Media Content & Creatives',
                      'Campaign Management',
                      'Reports & Planning'
                    ]}
                  />
                  <Sections.HbitsSec4 />
                  <Sections.HbitsSec5 />
                  <Components.WebImage
                    id="hbitssec6"
                    image={HBITS_IMAGES.web1}
                    hasTopBorder={true}
                    spacing={'pt-20 pb-5'}
                  />
                  <Components.WebImage
                    id="hbitssec7"
                    image={HBITS_IMAGES.web2}
                  />
                  <Components.WebImage
                    id="hbitssec8"
                    image={HBITS_IMAGES.web3}
                  />
                  <Components.WebImage
                    id="hbitssec9"
                    image={HBITS_IMAGES.web4}
                    hasBottomBorder={true}
                    spacing={'pt-5 pb-20'}
                  />
                  <Components.MobileScreensLayout
                    id="hbitssec10"
                    imageList={[
                      HBITS_IMAGES.mobile1,
                      HBITS_IMAGES.mobile2,
                      HBITS_IMAGES.mobile3
                    ]}
                    backgroundColor="black"
                    hasTopBorder={true}
                    spacing={'pt-20 pb-5'}
                  />
                  <Components.MobileScreensLayout
                    id="hbitssec11"
                    imageList={[
                      HBITS_IMAGES.mobile4,
                      HBITS_IMAGES.mobile5,
                      HBITS_IMAGES.mobile6
                    ]}
                    backgroundColor="black"
                    hasTopBorder={true}
                    spacing={'pt-5 pb-20'}
                  />
                  <Sections.HbitsSec8 />
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

export default Hbits;
