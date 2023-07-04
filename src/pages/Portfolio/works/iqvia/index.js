import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { General, Header, FooterScrollable } from "@components";
import Menu from "../../../Menu";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import * as Sections from "./sections";
import * as Components from '../components'
import { IQVIA_IMAGES } from "@images";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

function Iqvia() {
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
              <Section className="iqviadetail font-graphik text-[16px] laptop:text-[28px] text-[#B1B1B1] bg-black">
                <div className="w-full">
                  <Sections.Sec1
                    rect={body ? body.rect : null}
                    navigate={navigate}
                  />
                  <Components.Overview
                    id="iqviasec2"
                    image={IQVIA_IMAGES.atom}
                    description="Our partnership with iQVIA involved the digitisation of customers’ complete health ecosystem. To solve this challenge, we adopted the Atomic Design approach, creating components that are both scalable and reusable, capable of accommodating devices of varying sizes and resolutions."
                  />
                  <Components.GlanceGrid
                    id="iqviasec3"
                    listItems={[
                      'Information Architecture',
                      'Experience Strategy',
                      'Key Wireframes',
                      'Design System Planning & Testing',
                      'Prototype & Usability Testing',
                      'Visual Design',
                      'Design System Guidelines For Developers',
                      'Design Handover & Support',
                    ]}
                  />
                  <Components.WebImage
                    id="iqviasec4"
                    image1={IQVIA_IMAGES.design1}
                    image2={IQVIA_IMAGES.design2}
                    hasTopBorder={true}
                    spacing={'pt-20 pb-5'}
                  />
                  <Components.WebImage
                    id="iqviasec5"
                    image={IQVIA_IMAGES.web1}
                    hasTopBorder={true}
                    spacing={'pt-20 pb-5'}
                  />
                  <Components.WebImage
                    id="iqviasec6"
                    image={IQVIA_IMAGES.web2}
                    hasTopBorder={true}
                    spacing={'py-5'}
                  />
                  <Components.WebImage
                    id="iqviasec7"
                    image={IQVIA_IMAGES.web3}
                    hasTopBorder={true}
                    spacing={'py-5'}
                  />
                  <Components.WebImage
                    id="iqviasec8"
                    image={IQVIA_IMAGES.web4}
                    hasTopBorder={true}
                    spacing={'py-5'}
                  />
                  <Components.WebImage
                    id="iqviasec9"
                    image={IQVIA_IMAGES.web5}
                    hasTopBorder={true}
                    spacing={'pt-5 pb-20'}
                  />
                  <Components.MobileScreensLayout
                    id="iqviasec10"
                    imageList={[
                      IQVIA_IMAGES.mobile1,
                      IQVIA_IMAGES.mobile2,
                      IQVIA_IMAGES.mobile3
                    ]}
                    backgroundColor="black"
                    hasTopBorder={true}
                    spacing={'pt-20 pb-4'}
                  />
                  <Components.MobileScreensLayout
                    id="iqviasec11"
                    imageList={[
                      IQVIA_IMAGES.mobile4,
                      IQVIA_IMAGES.mobile5,
                      IQVIA_IMAGES.mobile6
                    ]}
                    backgroundColor="black"
                    hasTopBorder={true}
                    spacing={'py-4'}
                  />
                  <Components.MobileScreensLayout
                    id="iqviasec12"
                    imageList={[
                      IQVIA_IMAGES.mobile7,
                      IQVIA_IMAGES.mobile8,
                      IQVIA_IMAGES.mobile9
                    ]}
                    backgroundColor="black"
                    hasTopBorder={true}
                    spacing={'pt-4 pb-20'}
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

export default Iqvia;
