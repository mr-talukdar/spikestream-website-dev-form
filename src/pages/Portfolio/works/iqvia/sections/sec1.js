import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { General } from "@components";
import { BLOG_IMAGES, IQVIA_IMAGES } from "@images";

function Sec1({ rect, navigate }) {
    const sectionRef = useRef();
    // Timeline
    const tl = gsap.timeline();

    useEffect(() => {
        tl.to('#iqviaDetailImage', {
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            duration: 0.75,
            ease: "power4.inOut",
        });
        tl.to(
            '#iqviasec1 .fade-up',
            {
                opacity: 1,
                y: 0,
                duration: 0.35,
                stagger: 0.05,
                ease: 'power4.inOut'
            }
        );
    }, []);

    return (
        <General.Container ref={sectionRef} data-scroll-section>
            <div id="iqviasec1">
                <div className='w-screen h-screen bg-[#2C2C2C]'>
                    <div id='iqviaDetailImage' className="bg-cover bg-center" style={rect ? { position: "absolute", top: rect.top, left: rect.left, width: rect.width, height: rect.height, backgroundImage: `url(${ IQVIA_IMAGES.cover })` } : { position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", backgroundImage: `url(${ IQVIA_IMAGES.cover })` }}>
                        <div className='h-full w-full my-12 tablet:my-0 laptop:my-12 flex flex-col tablet:flex-row laptop:jusify-between tablet:items-center laptop:items-start laptop:justify-start'>
                            <div className="laptop:basis-7/12 mx-6 tablet:mx-12 laptop:mx-24">
                                <div className='text-[#F5F5F5] mt-6 tablet:mt-12 fade-container'>
                                    <div className='flex flex-row items-center cursor-pointer' onClick={() => navigate('/works', { replace: true })}>
                                        <img src={BLOG_IMAGES.Prev} alt={BLOG_IMAGES.Prev} className='w-[8px] h-[14px] object-contain mr-[10px] fade-up' />
                                        <div className='text-accent font-medium text-[16px] fade-up whitespace-nowrap'>Featured Work</div>
                                    </div>
                                    <p className="mt-2 tablet:mt-6 fade-up reveal-clip-anim text-[36px] laptop:text-[60px] font-light">iQVIA</p>
                                    <p className="fade-up reveal-clip-anim text-[16px] font-medium">UX Strategy & Design System
                                        (All Devices)</p>

                                    <img src={IQVIA_IMAGES.landing1} alt={IQVIA_IMAGES.landing1} className='hidden laptop:block mt-28 object-contain w-full laptop:w-full fade-up' />
                                </div>
                            </div>
                            <div className="mt-44 laptop:mt-0 laptop:basis-5/12  flex flex-col w-full laptop:w-[200px] h-full justify-center gap-6 px-4">
                                <img src={IQVIA_IMAGES.landing2} alt={IQVIA_IMAGES.landing2} className='object-contain w-full fade-up laptop:w-[300px]' />
                                <img src={IQVIA_IMAGES.landing3} alt={IQVIA_IMAGES.landing3} className='hidden tablet:block object-contain w-full fade-up laptop:w-[300px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </General.Container>
    )
}

export default Sec1