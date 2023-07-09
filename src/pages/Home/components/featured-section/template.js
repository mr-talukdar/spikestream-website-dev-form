import React, { useEffect, useRef, useState } from "react";
import { General } from "@components";
import { HOME_ICONS } from "@images";

import gsap from "gsap";
import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'

function FeaturedTemplate(props) {
  const sectionRef = useRef();
  const videoRef = useRef(null);

  const reveal = useOnScreen(sectionRef);
  const [isRevealed, setIsRevealed] = useState(false);
  const titleLines = props.title.split('\\n');

  useEffect(() => {
    if (!isRevealed)
      setIsRevealed(reveal);

    if (videoRef && videoRef.current) {
      if (reveal) videoRef.current.play();
      else videoRef.current.pause();
    }
  }, [isRevealed, reveal])


  useEffect(() => {
    if (isRevealed) {
      gsap.to(
        `.${ props.identifier } .fade-up`,
        AnimConfig.fadeUpConfig
      );
    }
  }, [isRevealed, props.identifier]);

  return (
    <General.Container ref={sectionRef}>
      <div
        style={{ backgroundImage: `url(${ props.bg })` }}
        className={`${ props.identifier } h-full w-full bg-cover bg-no-repeat px-10 tablet:px-28 py-14 tablet:py-20 laptop:px-44`}
      >
        <div className="h-full w-full flex flex-col laptop:flex-row gap-y-4 tablet:gap-y-0">
          <div className="basis-2/3 laptop:basis-1/2 flex items-center justify-center order-1 laptop:order-2 fade-up">
            {
              props.isVideo ?
                <div className="w-full h-full flex justify-center items-center laptop:p-8 mac:p-20 ultrawide:p-32">
                  <div
                    className="bg-mobile-border bg-contain bg-no-repeat bg-center w-full h-full"
                  >
                    <div className="absolute inset-0 flex justify-center items-center p-4 tablet:p-6 laptop:p-16 mac:p-28 ultrawide:p-44">
                      <video
                        className="object-contain w-fit h-full rounded-xl"
                        ref={videoRef}
                        src={props.videoUrl}
                        loop muted preload="auto" autoPlay playsInline={true}
                      />
                    </div>
                  </div>
                </div> :
                <div
                  style={{
                    backgroundImage: `url(${ props.icon })`,
                  }}
                  className="bg-contain bg-no-repeat w-full h-full bg-center"
                />
            }
          </div>
          <div className="basis-1/3 laptop:basis-1/2 flex flex-col order-2 laptop:order-1 w-11/12 justify-end laptop:justify-center">
            <div className="text-sm tablet:text-base laptop:text-xl fade-up">
              Featured Work
            </div>
            <div className="mt-2 tablet:mt-8 font-light text-3xl tablet:text-6xl fade-up">
              {titleLines.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
            <div className="smallphone:mt-2 mt-5 laptop:mt-16 text-base tablet:text-xl fade-up">
              {props.subtitle}
            </div>
            <div className="smallphone:mt-6 mt-8 flex flex-row items-center fade-up cursor-pointer" onClick={() => props.navigate(props.link)}>
              <div className="text-sm tablet:text-base font-medium">
                View Work
              </div>
              <div className="ml-5 items-center w-2">
                <img
                  src={HOME_ICONS.RightArrow}
                  className="object-contain"
                  alt="View Work Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </General.Container>
  );
}

export default FeaturedTemplate;
