import React from "react";
import { VIDEOS } from "@images";

function Sec1(props) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full laptop:w-1/2 h-full fade-up flex justify-center items-center ">
                <div
                    className="bg-mobile-border bg-contain bg-no-repeat bg-center h-full w-10/12 tablet:w-full"
                >
                    <div className="relative inset-0 flex justify-center items-center w-full h-full p-3 tablet:p-20 laptop:p-6 videoFix:p-6">
                        <div>
                            <video
                                className="object-contain w-full h-full rounded-xl"
                                ref={props.videoRef}
                                src={VIDEOS.celestial_long}
                                loop
                                muted
                                preload="auto"
                                autoPlay
                                playsInline={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec1