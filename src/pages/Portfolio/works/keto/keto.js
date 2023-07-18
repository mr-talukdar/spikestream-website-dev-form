import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { General, Header, FooterScrollable } from "@components";
import Menu from "../../../Menu";
import * as KetoSections from "./sections";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import * as Components from '../components'
import { KETO_IMAGES } from "@images";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

function Keto() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { state: body } = useLocation();

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
        watch={
          [

          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          {
            <General.CanvasContainer isWideScreen={false}>
              <Section className="ketodetail font-graphik text-[16px] laptop:text-[28px] text-[#B1B1B1] bg-black">
                <div className="w-full">
                  <Components.IntroPage
                    id="ketosec1"
                    rect={body ? body.rect : null}
                    navigate={navigate}
                    title='KetoBalanced'
                    subtitle='UX & UI Design + Development'
                    visualComponent={KetoSections.Intro}
                    cover={KETO_IMAGES.cover}
                  />
                  <Components.Overview
                    id="ketosec2"
                    image={KETO_IMAGES.cal}
                    description="KetoBalanced provides a solution to the common problem of weight loss faced by millions of people. We collaborated with them to create a weight loss journey for individuals worldwide. The app’s unique selling point is its personalized approach, which includes tailored meal plans and other recommendations based on users’ progress."
                  />
                  <Components.GlanceGrid
                    id="ketosec3"
                    listItems={[
                      'Competitive Analysis',
                      'User Research & Information Architecture',
                      'Experience Strategy',
                      'Wireframes',
                      'Prototype & Usability Testing',
                      'Visual Design',
                      'iOS & Android App Development',
                      'App Testing',
                      'App Store & Play Store Submission'
                    ]}
                  />
                  <Components.MobileScreensLayout
                    id="ketosec4"
                    imageList={[
                      KETO_IMAGES.gender,
                      KETO_IMAGES.diet,
                      KETO_IMAGES.age
                    ]}
                    hasTopBorder={true}
                    hasBottomBorder={true}
                  />
                  <KetoSections.KetoSec5 />
                  <Components.MobileScreensLayout
                    id="ketosec6"
                    imageList={[
                      KETO_IMAGES.swap,
                      KETO_IMAGES.quiz,
                      KETO_IMAGES.summary
                    ]}
                    spacing={'pt-20 pb-5'}
                  />
                  <Components.MobileScreensLayout
                    id="ketosec7"
                    imageList={[
                      KETO_IMAGES.mood2,
                      KETO_IMAGES.ketosis2,
                      KETO_IMAGES.meals
                    ]}
                    spacing={'pt-5 pb-20'}
                  />
                  <KetoSections.KetoSec7 />
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

export default Keto;
