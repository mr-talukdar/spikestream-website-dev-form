import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { General, Header, FooterScrollable } from "@components";
import Menu from "../../../Menu";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import * as Sections from "./sections";

import * as Components from '../components'
import { VECTOR_FLOW_IMAGES } from "@images";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

function VectorFlow() {
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
        <main data-scroll-container ref={containerRef} >
          {
            <General.CanvasContainer isWideScreen={isWideScreen}>
              <Section className="kotaknetdetail font-graphik text-[16px] laptop:text-[28px] text-[#B1B1B1] bg-black">
                <div className="w-full">
                  <Components.IntroPage2
                    id="vectorflow1"
                    rect={body ? body.rect : null}
                    navigate={navigate}
                    title='VectorFlow'
                    subtitle='UX & UI Design'
                    visualComponent={Sections.Sec1}
                    cover={VECTOR_FLOW_IMAGES.cover}
                  />
                  <Components.Overview
                    id="vectorflow2"
                    image={VECTOR_FLOW_IMAGES.idea}
                    description="Vector Consulting is a forward-thinking organization dedicated to addressing intricate challenges in the manufacturing sector. Our partnership with Vector Consulting resulted in the development of a cutting-edge product that simplifies manufacturing processes and ensures real-time tracking and updates on its status.."
                  />
                  <Components.GlanceGrid
                    id="vectorflow3"
                    listItems={[
                      'User Research',
                      'Information Architecture',
                      'Experience Strategy',
                      'Wireframes',
                      'Prototype & Usability Testing',
                      'Visual Design',
                      'Design System Guidelines For Developers',
                      'Design Handover & Support',
                      'Front End Testing',
                    ]}
                  />
                  <Components.WebImage
                    id="vectorflow4"
                    image={VECTOR_FLOW_IMAGES.web1}
                    hasTopBorder={true}
                    spacing={'pt-20 pb-5'}
                    backgroundColor="black"
                  />
                  <Components.WebImage
                    id="vectorflow5"
                    image={VECTOR_FLOW_IMAGES.web2}
                    backgroundColor="black"
                  />
                  <Components.WebImage
                    id="vectorflow6"
                    image={VECTOR_FLOW_IMAGES.web3}
                    backgroundColor="black"
                  />

                  <Components.WebImage
                    id="vectorflow7"
                    image={VECTOR_FLOW_IMAGES.web4}
                    backgroundColor="black"
                  />

                  <Components.WebImage
                    id="vectorflow8"
                    image={VECTOR_FLOW_IMAGES.web5}
                    backgroundColor="black"
                  />

                  <Components.WebImage
                    id="vectorflow9"
                    image={VECTOR_FLOW_IMAGES.web6}
                    hasBottomBorder={true}
                    backgroundColor="black"
                    spacing={'pt-5 pb-20'}
                  />

                  <Components.MobileScreensLayout
                    id="vectorflow12"
                    imageList={[
                      VECTOR_FLOW_IMAGES.mobile1,
                      VECTOR_FLOW_IMAGES.mobile2,
                      VECTOR_FLOW_IMAGES.mobile3
                    ]}
                    backgroundColor="black"
                    hasTopBorder={true}
                    spacing={'pt-20 pb-4'}
                  />
                  <Components.MobileScreensLayout
                    id="vectorflow12"
                    imageList={[
                      VECTOR_FLOW_IMAGES.mobile4,
                      VECTOR_FLOW_IMAGES.mobile5,
                      VECTOR_FLOW_IMAGES.mobile6
                    ]}
                    backgroundColor="black"
                    hasTopBorder={true}
                    spacing={'pb-20 pt-4'}
                  />
                  <Sections.Sec6
                    id="vectorflow16"
                  />
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

export default VectorFlow;
