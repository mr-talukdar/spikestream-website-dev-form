/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { General, Header, Footer, ImageSkeleton } from "@components";
import Menu from "../Menu";
import gsap from "gsap";
import API from "@api";
import { useNavigate, useLocation } from "react-router-dom";
import * as AnimConfig from "@helpers/animConfig";

import { useQuery } from "@apollo/client";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

function ListItem({ data }) {
  const navigate = useNavigate();
  const divRef = useRef(null);

  const handleClick = () => {
    const rect = divRef.current.getBoundingClientRect();
    const scrollPos = window.scrollY;
    navigate(`/blogs/read?id=${ data.id }`, { state: { rect, scrollPos } });
  };

  return (
    <div className="basis-full tablet:basis-[48%] laptop:basis-[30%] laptop:mr-[1.5%] laptop:mb-[1.5%]">
      <div className={`fade-up w-full`}>
        <div
          className="w-full h-[250px] tablet:h-[300px] laptop:h-[350px]"
          ref={divRef}
        >
          <div
            className="w-full h-full cursor-pointer"
            onClick={handleClick}
          >
            <div className="w-full h-full">
              <ImageSkeleton
                src={data.image.url}
                alt={data.image.url}
              />
              <div className="absolute top-0 left-0 p-5 laptop:px-10 laptop:py-5 mac:py-12 mac:px-10">
                <div className="text-2xl laptop:text-3xl mac:text-4xl font-normal">
                  {data.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Blogs() {
  const containerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogData, setBlogData] = useState([]);

  // Data stores the data passed from query, error stores if the GraphQl Server return any error and Loading can be used to show a loading screen, here this will return an object with blogsData Array
  const { data } = useQuery(API.ALL_BLOGS_QUERY);

  useEffect(() => {
    if (data) {
      setBlogData(data.blogDatas);
    }
  }, [data]);

  useEffect(() => {
    gsap.to(".blogsPage .fade-up", AnimConfig.fadeUpConfig);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  useEffect(() => {
    if (blogData.length > 0) {
      gsap.to(".blogsContainer .fade-up", AnimConfig.fadeUpConfig);
    }
  }, [blogData]);

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
            <General.CanvasContainer isWideScreen={false}>
              <Section
                data-scroll-section
                className="blogsPage w-full min-h-screen font-graphik bg-[#2C2C2C] px-10 py-20 laptop:py-20 laptop:px-28"
              >
                <div className="w-full h-full flex flex-col justify-between">
                  <div>
                    <div className="text-accent text-xl">
                      <p className="fade-up">Blogs</p>
                    </div>
                    <div
                      className={`mt-6 text-4xl laptop:text-6xl tablet:w-2/3 font-light`}
                    >
                      <p className="fade-up text-3xl laptop:hidden">
                        Thoughts on how design will shape our future
                      </p>

                      <p className="fade-up text-6xl hidden laptop:block">
                        Thoughts on how design<br />will shape our future
                      </p>
                    </div>

                    <div
                      id="blogParent"
                      className="blogsContainer mt-8 laptop:mt-16 mac:pt-12 flex flex-row flex-wrap gap-6 tablet:gap-0"
                    >
                      {blogData.map((item) => {
                        return (
                          <ListItem
                            key={item.id}
                            data={item}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <Footer css={"mt-12 laptop:mt-20"} />
                </div>
              </Section>
            </General.CanvasContainer>
          }
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default Blogs;
