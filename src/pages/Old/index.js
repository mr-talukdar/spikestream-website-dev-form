import React, { useState, useEffect, useRef } from "react";
import { Header, Footer } from "@components";
import Menu from "../Menu";
import { ABOUT_IMAGES, HOME_ICONS } from "@images";
import { gsap } from "gsap";
import * as Utils from "@helpers/utils";
import "./about.css";
import Plx from "react-plx";
import useOnScreen from "@hooks/useOnScreen";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
function AboutMobile() {
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();

  const [visible, setVisibility] = useState(false);
  const [initializeTriggers, setInitializeTriggers] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  useEffect(() => {
    setTimeout(() => {
      setVisibility(true);
    }, 500);
    setTimeout(() => {
      setInitializeTriggers(true);
    }, 2000);
  }, []);

  // References
  const namasteText = useRef();
  const subHeaderText = useRef();
  const planet = useRef();
  const asteroid = useRef();

  const light = useRef();
  const galaxy = useRef();
  const cometTimeline = gsap.timeline();

  const isPhone = window.innerWidth < 576;
  const isTablet = window.innerWidth < 992;
  const isMac = window.innerWidth > 1570;

  useEffect(() => {
    if (visible) {
      if (namasteText && namasteText.current)
        gsap.fromTo(
          namasteText.current,
          {
            opacity: 0,
            transform: "translateY(100vh)",
          },
          {
            opacity: 1,
            transform: "translateY(30vh)",
            duration: 2,
            ease: "power4.inOut",
          }
        );

      if (subHeaderText && subHeaderText.current)
        gsap.fromTo(
          subHeaderText.current,
          {
            opacity: 0,
            transform: "translateY(100vh)",
          },
          {
            opacity: 1,
            transform: "translateY(32vh)",
            duration: 2,
            ease: "power4.inOut",
          }
        );

      if (planet && planet.current) {
        gsap.fromTo(
          planet.current,
          {
            opacity: 0,
            transform: "translateY(100vh)",
          },
          {
            opacity: 1,
            transform: "translateY(85vh)",
            duration: 2,
            delay: 0.25,
            ease: "power4.inOut",
          }
        );
      }

      if (asteroid && asteroid.current) {
        gsap.fromTo(
          asteroid.current,
          {
            opacity: 0,
            transform: "translateY(100vh)",
          },
          {
            opacity: 1,
            transform: "translateY(55vh)",
            duration: 2,
            delay: 0.25,
            ease: "power4.inOut",
          }
        );
      }

      if (light && light.current) {
        gsap.to(light.current, {
          opacity: 1,
          y: isPhone ? "-50vh" : isTablet ? "-58vh" : "-90vh",
          duration: 2,
          delay: 0.25,
          ease: "power4.inOut",
        });
      }

      if (galaxy && galaxy.current) {
        gsap.fromTo(
          galaxy.current,
          {
            opacity: 0,
            transform: "translateY(100vh)",
          },
          {
            opacity: 1,
            transform: "translateY(60vh)",
            duration: 2,
            delay: 0.25,
            ease: "power4.inOut",
          }
        );
      }
    }
  }, [visible]);

  useEffect(() => {
    if (initializeTriggers) {
      // Layer 1
      gsap.to("#lightPlanet", {
        y: isPhone ? "45vh" : isTablet ? "50vh" : "55vh",
        scrollTrigger: {
          trigger: "#planet1Trigger",
          start: "top 80%",
          end: "center 30%",
          scrub: true,
        },
      });

      gsap.to(".fade-out-text1", {
        y: "-5vh",
        opacity: 0,
        scrollTrigger: {
          trigger: ".fade-out-text1",
          start: "bottom 20%",
          end: "bottom 5%",
          scrub: true,
        },
      });

      // Layer 2
      gsap.to("#striveText", {
        opacity: 1,
        scrollTrigger: {
          trigger: "#planet1Trigger",
          start: "center 40%",
          end: "center 20%",
          scrub: true,
        },
      });

      gsap.to("#striveTextInner", {
        y: "50vh",
        scrollTrigger: {
          trigger: "#planet1Trigger",
          start: "center 40%",
          end: "center 20%",
          scrub: true,
        },
      });

      gsap.to(".fade-in-text2", {
        y: "30vh",
        opacity: 1,
        delay: 0.15,
        scrollTrigger: {
          trigger: "#planet1Trigger",
          start: "center 40%",
          end: "center 20%",
          scrub: true,
        },
      });

      gsap.to("#striveText", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#animTrigLayer3",
          start: "top 60%",
          end: "top 40%",
          scrub: true,
        },
      });

      gsap.to(".fade-in-text2", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#animTrigLayer3",
          start: "top 60%",
          end: "top 20%",
          scrub: true,
        },
      });

      // Layer 3
      gsap.to(".fade-up-text3", {
        y: "-5vh",
        opacity: 1,
        scrollTrigger: {
          trigger: "#animTrig2Layer3",
          start: "top 95%",
          end: "top 85%",
          scrub: true,
        },
      });

      cometTimeline.to("#cometLight", {
        x: isPhone ? "200px" : isTablet ? "400px" : "1000px",
        y: isPhone ? "100px" : isTablet ? "160px" : "420px",
        duration: 2.5,
        scrollTrigger: {
          trigger: "#memorableText",
          start: "top 60%",
          end: "top 40%",
          scrub: true,
        },
      });
      cometTimeline.to("#cometLight2", {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#memorableText",
          start: "top 45%",
          end: "top 30%",
          scrub: true,
        },
      });
      cometTimeline.to("#cometLight", {
        opacity: 0.75,
        scrollTrigger: {
          trigger: "#memorableText",
          start: "top 45%",
          end: "top 30%",
          scrub: true,
        },
      });

      // Layer 4
      gsap.to(".fade-up-textInner3", {
        opacity: 0,
        y: "-10vh",
        scrollTrigger: {
          trigger: "#animTrigLayer4",
          start: "top 95%",
          end: "top 85%",
          scrub: true,
        },
      });
      gsap.to(".fade-up-text4", {
        y: "-5vh",
        opacity: 1,
        scrollTrigger: {
          trigger: "#animTrig2Layer4",
          start: "top 95%",
          end: "top 85%",
          scrub: true,
        },
      });

      gsap.to("#icebergParent", {
        y: "15vh",
        scrollTrigger: {
          trigger: "#animTrig3Layer4",
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.to("#water", {
        scale: 1,
        scrollTrigger: {
          trigger: "#animTrig3Layer4",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      });

      //Layer 5
      gsap.to(".fade-up-text5Part1", {
        opacity: 1,
        y: "25vh",
        scrollTrigger: {
          trigger: "#animTrigLayer5",
          start: "top 50%",
          end: "top 30%",
          scrub: true,
        },
      });
      gsap.to(".fade-up-text5Part2", {
        y: "-35vh",
        scrollTrigger: {
          trigger: "#animTrigLayer5",
          start: "top 30%",
          end: "top 15%",
          scrub: true,
        },
      });

      gsap.to(".about-contact .fade-up", {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".about-contact",
          start: "top 40%",
          end: "top 20%",
          scrub: true,
        },
      });

      gsap.to(".about-competencies .fade-up", {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".about-competencies",
          start: "top 50%",
          end: "top 30%",
          scrub: true,
        },
      });
    }
  }, [initializeTriggers]);

  return (
    <div className="overflow-x-hidden">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="w-full font-graphik" id="smooth-wrapper">
        <div id="smooth-content">
          {/* Background */}
          <motion.div style={{ y }}>
            <div
              className="w-full h-[400vh] "
              style={{
                backgroundImage: `url(${ABOUT_IMAGES.bg1})`,
                backgroundSize: "cover",
                opacity: visible ? 1 : 0,
                transition: "opacity 1s",
              }}
            ></div>
          </motion.div>
          <div
            className="w-full h-[200vh]"
            style={{
              backgroundImage: `url(${ABOUT_IMAGES.bg2})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="absolute w-full h-[200vh] top-[400vh]"
            style={{
              backgroundImage: `url(${ABOUT_IMAGES.bg3})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="w-full h-[50vh] bg-black"></div>
          {/* Background */}

          {/* Layer 1 */}
          <div className="absolute top-0 w-full">
            <div className="text-[60px] tablet:text-[100px] laptop:text-[150px] font-light">
              <div ref={namasteText} className="opacity-0">
                <div className="flex justify-center">
                  <div className="text-center fade-out-text1">Hello.</div>
                </div>
              </div>
            </div>

            <div className="text-[20px] tablet:text-[30px] laptop:text-[35px] font-regular">
              <div
                ref={subHeaderText}
                className="opacity-0 px-12 tablet:px-20 flex justify-center"
              >
                <div className="laptop:max-w-[800px] text-center fade-out-text1">
                  We are proficient thinkers and engineers who aspire for
                  excellence and growth
                </div>
              </div>
            </div>
            <img
              ref={asteroid}
              src={ABOUT_IMAGES.asteroid1}
              alt={ABOUT_IMAGES.asteroid1}
              className="absolute left-[70vw] opacity-0 top-0"
            />
            <div ref={light} className="absolute w-full opacity-0 top-[120vh]">
              <img
                src={ABOUT_IMAGES.light}
                alt={ABOUT_IMAGES.light}
                id="lightPlanet"
                className="w-fit mx-auto"
              />
            </div>
            <div className="absolute top-[145vh] left-0 right-0 mx-auto text-center text-[20px] tablet:text-[50px] laptop:text-[70px] font-medium w-full max-w-[600px] laptop:leading-[6rem]">
              <div className="opacity-0 fade-in-text2">
                Go beyond the conventional
              </div>
            </div>
            <img
              ref={planet}
              src={ABOUT_IMAGES.planet}
              alt={ABOUT_IMAGES.planet}
              id="planet1Trigger"
              className="absolute left-0 right-0 mx-auto opacity-0 top-0 w-[700px]"
            />
            <img
              ref={galaxy}
              src={ABOUT_IMAGES.galaxy}
              alt={ABOUT_IMAGES.galaxy}
              className="absolute left-0 laptop:left-[15vw] top-[-10vh] tablet:top-[5vh] laptop:top-0 opacity-0 top-0"
            />
          </div>
          {/* Layer 1 */}

          {/* Layer 2 */}
          <div className="absolute top-[110vh] h-screen w-full">
            <div
              id="striveText"
              className="opacity-0 absolute top-[10vh] left-0 right-0 mx-auto text-center text-[20px] tablet:text-[30px] laptop:text-[35px] font-regular"
            >
              <div id="striveTextInner">We strive and</div>
            </div>
            <img
              src={ABOUT_IMAGES.asteroid2}
              alt={ABOUT_IMAGES.asteroid2}
              className="absolute top-[50vh] left-[70vw]"
            />
          </div>
          {/* Layer 2 */}

          {/* Layer 3 */}
          <div className="absolute top-[200vh] h-screen w-full">
            <img
              src={ABOUT_IMAGES.planet2}
              alt={ABOUT_IMAGES.planet2}
              className="absolute top-[-10vh] right-[-20vw] tablet:right-[-20vw] w-[1200px]"
            />
            <img
              id="cometLight"
              src={ABOUT_IMAGES.light2}
              alt={ABOUT_IMAGES.light2}
              className="absolute top-[-300px] left-[-200px] tablet:top-[-500px] tablet:left-[-400px]  laptop:top-[-600px] laptop:left-[-200px]  w-[800px]"
            />
            <img
              id="cometLight2"
              src={ABOUT_IMAGES.light3}
              alt={ABOUT_IMAGES.light3}
              className="absolute top-[-80px] right-[-80px]  tablet:top-[-70px]  tablet:right-[-110px] laptop:top-[50px]  tablet:right-[-110px] opacity-0"
            />
            <div
              id="animTrigLayer3"
              className="w-full h-20 absolute top-[30vh]"
            ></div>
            <div
              id="animTrig2Layer3"
              className="w-full h-20  absolute top-[55vh]"
            ></div>
            <div className="absolute top-[20vh] left-0 right-0 mx-auto text-center text-[20px] tablet:text-[30px] laptop:text-[35px] font-regular">
              <div className="opacity-0 fade-up-text3">
                <div className="opacity-1 fade-up-textInner3">
                  To ensure your brand
                </div>
              </div>
            </div>
            <div
              id="memorableText"
              className="absolute top-[30vh] left-0 right-0 mx-auto text-center text-[35px] tablet:text-[50px] laptop:text-[90px] font-medium px-20 laptop:px-0 w-full tablet:max-w-[600px] laptop:leading-[6rem]"
            >
              <div className="opacity-0 fade-up-text3">
                <div className="opacity-1 fade-up-textInner3">
                  Makes a remarkable impact
                </div>
              </div>
            </div>
          </div>

          {/* Layer 4 */}
          <div className="absolute top-[300vh] h-screen w-full">
            <div
              id="animTrigLayer4"
              className="w-full h-20 absolute top-0"
            ></div>
            <div
              id="animTrig2Layer4"
              className="w-full h-20  absolute top-[20vh]"
            ></div>
            <div className="absolute top-[15vh] left-0 right-0 mx-auto text-center text-[20px] tablet:text-[30px] laptop:text-[35px] font-regular">
              <div className="opacity-0 fade-up-text4">
                <div className="opacity-1 fade-up-textInner4">
                  An impact backed by
                </div>
              </div>
            </div>
            <div className="absolute top-[25vh] left-0 right-0 mx-auto text-center text-[20px] text-[35px] tablet:text-[50px] laptop:text-[90px] font-medium px-20 laptop:px-0 w-full tablet:max-w-[600px] laptop:leading-[6rem]">
              <div className="opacity-0 fade-up-text4">
                <div className="opacity-1 fade-up-textInner4">
                  Data, technology, and creativity
                </div>
              </div>
            </div>
            <div
              id="icebergParent"
              className="w-full absolute  tablet:bottom-[-450px] bottom-[-550px]"
            >
              <img
                id="iceberg"
                src={ABOUT_IMAGES.iceberg}
                alt={ABOUT_IMAGES.iceberg}
                className={`w-full max-w-[900px] mx-auto origin-center`}
              />
            </div>
            <div
              id="water"
              className="w-full absolute bottom-[-5vh] scale-0 origin-bottom"
            >
              <img
                src={ABOUT_IMAGES.water}
                alt={ABOUT_IMAGES.water}
                className={`w-full max-w-[1200px] mx-auto`}
              />
            </div>
            <div
              id="animTrig3Layer4"
              className="w-full h-20 absolute top-[70vh]"
            ></div>
          </div>

          {/* Layer 5 */}
          <div className="absolute top-[400vh] h-screen w-full">
            <div
              id="animTrigLayer5"
              className="w-full h-20 absolute top-[20vh]"
            ></div>
            <div className="absolute top-[25vh] left-0 right-0 mx-auto text-center text-[20px] tablet:text-[30px] laptop:text-[35px] font-regular">
              <div className="opacity-0 fade-up-text5Part1">
                Because we believe that
              </div>
            </div>
            <div className="absolute top-[95vh] left-0 right-0 mx-auto text-center text-[20px] text-[35px] tablet:text-[50px] laptop:text-[90px] font-medium px-8 laptop:px-0  w-full tablet:max-w-[800px] laptop:leading-[6rem]">
              <div className="fade-up-text5Part2">
                Success is not what you see, but a strategy at play
              </div>
            </div>
          </div>

          {/* Competencies Layer */}
          <div className="absolute top-[550vh] w-full h-screen">
            <div className="about-competencies h-full flex flex-col justify-between px-10 tablet:px-28 laptop:px-28 tablet:py-20 py-16 laptop:py-12 mac:py-24 laptop:px-44 bg-black">
              <div>
                <div className="text-base fade-up ultrawide:text-lg">
                  Competencies
                </div>
                <div className="mt-6 text-sm tablet:text-base text-subtle w-full laptop:w-1/2 fade-up ultrawide:text-lg">
                  We are driven to discover the most innovative digital
                  solutions for ambitious brands seeking to break new ground and
                  create remarkable impact.
                </div>

                <div className="mt-8 tablet:mt-16 laptop:mt-8 mac:mt-12 smallphone:text-xl text-2xl tablet:text-4xl laptop:text-3xl desktop:text-5xl laptop:font-light">
                  <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10 fade-up">
                    Digital / Product Strategy
                  </div>
                  <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10 fade-up">
                    User Experience & Design Systems
                  </div>
                  <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10 fade-up">
                    Digital Marketing
                  </div>
                  <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10 fade-up">
                    Branding
                  </div>
                  <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10 fade-up">
                    Web + App Development
                  </div>
                  <div className="fade-up">
                    Augmented & Virtual Reality (AR / VR)
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="flex flex-row items-center fade-up cursor-pointer"
                  onClick={() => navigate("/works")}
                >
                  <div className="text-sm font-medium">View Our Work</div>
                  <div className="ml-5 items-center w-2">
                    <img
                      src={HOME_ICONS.RightArrow}
                      className="object-contain"
                      alt="Know more Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Layer */}
          <div className="absolute top-[650vh] w-full h-screen">
            <div className="about-contact bg-black h-full px-10  smallphone:pt-20 smallphone:pb-10 pt-28 pb-16 laptop:py-28 mac:py-32 ultrawide:py-36 tablet:px-28 laptop:px-44 laptop:pb-16">
              <div className="h-full flex flex-col justify-between">
                <div className="smallphone:text-2xl  fade-up font-light text-4xl tablet:text-6xl w-full tablet:w-4/5 laptop:w-2/5">
                  Want To Design An Impact?
                </div>
                <div className="flex flex-col laptop:flex-row laptop:mb-0 justify-between laptop:mt-8">
                  <div className="basis-1/2 h-1/2 laptop:h-full flex flex-col laptop:justify-start">
                    <div className="smallphone:text-sm text-base text-accent fade-up">
                      Start Here
                    </div>
                    <div className="smallphone:mt-4 mt-8 w-40  h-12 bg-accent rounded-full px-5 py-2 fade-up cursor-pointer">
                      <a
                        className="w-full h-full flex justify-center items-center "
                        href="tel:+919819158103"
                        data-rel="external"
                      >
                        <div
                          style={{
                            backgroundImage: `url(${HOME_ICONS.Call})`,
                          }}
                          className="h-5 w-5 bg-no-repeat"
                        ></div>
                        <div className="ml-3 smallphone:text-sm text-base text-black">
                          Reach Out
                        </div>
                      </a>
                    </div>
                    <div className="smallphone:mt-6 mt-8 fade-up">
                      <a
                        className="smallphone:text-sm text-subtle"
                        href="mailto:martin@spikestream.co"
                        data-rel="external"
                      >
                        martin@spikestream.co
                      </a>
                    </div>

                    <div className="mt-1 flex items-center fade-up">
                      <div className="smallphone:text-sm text-base">
                        + 91 9819 158 103
                      </div>
                      <div
                        style={{
                          backgroundImage: `url(${HOME_ICONS.Whatsapp})`,
                        }}
                        className="h-10 w-10 bg-no-repeat ml-1 bg-center cursor-pointer"
                        onClick={Utils.openWhatsappChat}
                      ></div>
                    </div>
                  </div>
                  <div className="smallphone:mt-6 mt-16 laptop:mt-0 laptop:h-full flex flex-col laptop:justify-start">
                    <div className="smallphone:mt-0 mt-4 laptop:mt-0 smallphone:text-sm tablet:text-lg fade-up">
                      Studio Address
                    </div>
                    <div className="mt-6 smallphone:text-sm text-subtle tablet:text-lg tablet:w-3/4 laptop:mb-8 fade-up">
                      Spike Stream, B-304, Swapnalok CHS LTD, Off Filmcity Road,
                      India, Mumbai - 400097
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMobile;
