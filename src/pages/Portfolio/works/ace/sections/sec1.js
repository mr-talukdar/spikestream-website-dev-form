import React from "react";
import { VIDEOS } from "@images";

function Sec1(props) {
    return (
        <div className="w-full laptop:w-1/2 h-full fade-up flex justify-center items-center">
            <div
                className="absolute bg-mobile-border bg-contain bg-no-repeat bg-center flex justify-center items-center
                                    smallphone:w-[220px] smallphone:h-[440px]
                                    w-[280px] h-[550px]
                                    tablet:w-[320px] tablet:h-[650px]
                                    mac:w-[350px] mac:h-[700px]
                                    "
            >
                <div className="relative flex justify-center items-center
                                    smallphone:w-[180px] smallphone:h-[360px]
                                    w-[230px] h-[450px] 
                                    tablet:w-[270px] tablet:h-[550px]
                                    mac:w-[290px] mac:h-[655px]
                                    ">
                    <video
                        className="object-contain w-auto h-auto rounded-xl"
                        ref={props.videoRef}
                        src={VIDEOS.ace_pay}
                        loop
                        muted
                        preload="auto"
                        autoPlay
                        playsInline={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Sec1