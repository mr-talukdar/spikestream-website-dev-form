/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { General } from "@components";
import useOnScreen from '@hooks/useOnScreen'
import { BLOG_IMAGES } from "@images";

function IntroPage(props) {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const reveal = useOnScreen(sectionRef);
    const titleLines = props.title.split('\\n');

    useEffect(() => {
        if (videoRef && videoRef.current) {
            if (reveal) videoRef.current.play();
            else videoRef.current.pause();
        }
    }, [reveal])

    // Timeline
    const tl = gsap.timeline();

    useEffect(() => {
        tl.to(`#${ props.id }Image`, {
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            duration: 0.75,
            ease: "power4.inOut",
        });
        tl.to(
            `#${ props.id } .fade-up`,
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
            <div id={props.id}>
                <div className='w-full h-full'>
                    <div id={`${ props.id }Image`} className='bg-cover bg-center' style={props.rect ? { position: "absolute", top: props.rect.top, left: props.rect.left, width: props.rect.width, height: props.rect.height, backgroundImage: `url(${ props.cover })` } : { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: `url(${ props.cover })` }}>
                        <div className='pt-2 pb-12 tablet:py-44 laptop:py-12 mac:py-24 ultrawide:py-36 flex flex-col tablet:flex-row px-10 tablet:px-10 laptop:px-44 h-full w-full justify-start tablet:items-center laptop:items-start gap-y-7 tablet:gap-y-0 tablet:gap-x-10 mac:gap-x-24'>
                            <div className={`laptop:w-${ props.width || '1/2' } text-[#F5F5F5] mt-6 tablet:mt-12 fade-container`}>
                                <div className='flex flex-row items-center cursor-pointer' onClick={() => props.navigate('/works', { replace: true })}>
                                    <img src={BLOG_IMAGES.Prev} alt={BLOG_IMAGES.Prev} className='w-[8px] h-[14px] object-contain mr-[10px] fade-up' />
                                    <div className='text-accent font-medium text-base mac:text-lg fade-up'>Featured Work</div>
                                </div>
                                <p className="mt-2 tablet:mt-6 fade-up reveal-clip-anim text-4xl laptop:text-6xl font-light">
                                    {titleLines.map((line, index) => (
                                        <div key={index}>{line}</div>
                                    ))}
                                </p>
                                <p className="mt-2 tablet:mt-6  fade-up reveal-clip-anim text-base mac:text-lg font-medium">{props.subtitle}</p>
                            </div>
                            <div className="w-full laptop:w-2/3 h-full flex flex-col tablet:justify-center">
                                <div className="w-full h-full max-h-[800px] flex flex-row laptop:gap-x-2 mx-auto">
                                    <props.visualComponent
                                        videoRef={videoRef}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </General.Container>
    )
}

export default IntroPage