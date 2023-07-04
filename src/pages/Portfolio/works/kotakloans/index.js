import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { General, Header, FooterScrollable } from "@components";
import Menu from "../../../Menu";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import * as Sections from "./sections";

import * as Components from '../components'
import { KOTAK_LOANS_IMAGES } from "@images";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

function KotakLoans() {
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
                    id="kotakloansec1"
                    rect={body ? body.rect : null}
                    navigate={navigate}
                    title='Kotak Home Loans'
                    subtitle='UX & UI Design'
                    visualComponent={Sections.Sec1}
                    cover={KOTAK_LOANS_IMAGES.cover}
                  />
                  <Components.Overview
                    id="kotakloansec2"
                    image={KOTAK_LOANS_IMAGES.pouch}
                    description="As a result of Covid-19 lockdowns, banks saw a decline in foot falls. Kotak Bank seized this opportunity to shift the Home Loans experience from offline to online, and tasked Spike Stream to improve the visual design and user experience for individuals working from home."
                  />
                  <Components.GlanceGrid
                    id="kotakloansec3"
                    listItems={[
                      'User Experience',
                      'Visual Design',
                      'Prototype',
                      'Design Guidelines For Developers',
                      'Design Handover & Support',
                      'Front End Testing',
                    ]}
                  />
                  <Components.WebImage
                    id="kotakloansec4"
                    image={KOTAK_LOANS_IMAGES.web1}
                    hasTopBorder={true}
                    spacing={'pt-20 pb-5'}
                  />
                  <Components.WebImage
                    id="kotakloansec5"
                    image={KOTAK_LOANS_IMAGES.web2}
                  />
                  <Components.WebImage
                    id="kotakloansec6"
                    image={KOTAK_LOANS_IMAGES.web3}
                  />

                  <Components.WebImage
                    id="kotakloansec7"
                    image={KOTAK_LOANS_IMAGES.web4}
                  />

                  <Components.WebImage
                    id="kotakloansec8"
                    image={KOTAK_LOANS_IMAGES.web5}
                  />

                  <Components.WebImage
                    id="kotakloansec9"
                    image={KOTAK_LOANS_IMAGES.web6}
                  />

                  <Components.WebImage
                    id="kotakloansec10"
                    image={KOTAK_LOANS_IMAGES.web7}
                  />

                  <Components.WebImage
                    id="kotakloansec11"
                    image={KOTAK_LOANS_IMAGES.web8}
                    hasBottomBorder={true}
                    spacing={'pt-5 pb-20'}
                  />

                  <Components.MobileScreensLayout
                    id="kotakloansec12"
                    imageList={[
                      KOTAK_LOANS_IMAGES.mobile1,
                      KOTAK_LOANS_IMAGES.mobile2,
                      KOTAK_LOANS_IMAGES.mobile3
                    ]}
                    backgroundColor="black"
                    hasTopBorder={true}
                    spacing={'pt-20 pb-4'}
                  />

                  <Components.MobileScreensLayout
                    id="kotakloansec13"
                    imageList={[
                      KOTAK_LOANS_IMAGES.mobile4,
                      KOTAK_LOANS_IMAGES.mobile5,
                      KOTAK_LOANS_IMAGES.mobile6
                    ]}
                    backgroundColor="black"
                    spacing={'py-4'}
                  />
                  <Components.MobileScreensLayout
                    id="kotakloansec14"
                    imageList={[
                      KOTAK_LOANS_IMAGES.mobile7,
                      KOTAK_LOANS_IMAGES.mobile8,
                      KOTAK_LOANS_IMAGES.mobile9
                    ]}
                    backgroundColor="black"
                    spacing={'py-4'}
                  />
                  <Components.MobileScreensLayout
                    id="kotakloansec15"
                    imageList={[
                      KOTAK_LOANS_IMAGES.mobile10,
                      KOTAK_LOANS_IMAGES.mobile11,
                      KOTAK_LOANS_IMAGES.mobile12
                    ]}
                    backgroundColor="black"
                    hasBottomBorder={true}
                    spacing={'pt-4 pb-20'}
                  />
                  <Sections.Sec6
                    id="kotakloansec16"
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

export default KotakLoans;
