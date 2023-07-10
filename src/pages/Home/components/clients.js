import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { HOME_BG } from "@images";

import API from '@api'

import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'
function Flag({ img }) {
    return (
        <div className="h-full mr-2">
            <img
                src={img}
                className="object-contain h-[30px] w-[30px]"
                alt="Flag"
            />
        </div>
    )
}

function ClientItem({ data }) {
    return (
        <div className="w-full p-4 bg-[#272D36] rounded-lg fade-up">
            <div className="w-full h-[40px]">
                <div className="w-full h-full flex flex-row justify-between items-center">
                    <div className={`${ data.iconDim } h-full`}><img
                        src={data.iconURL}
                        className="h-full object-contain"
                        alt="Client Icon"
                    /></div>
                    <div></div>
                    <div className="h-full flex flex-row">
                        {data.countries.map((d, index) => <Flag key={index} img={d} />)}

                    </div>
                </div>
            </div>
            <div className="w-full h-[120px] font-light text-subtle mt-5">{data.text}</div>
        </div>
    )
}

function Client() {
    const sectionRef = useRef();
    const reveal = useOnScreen(sectionRef);
    const [isRevealed, setIsRevealed] = useState(false);

    const [clientData, setClientData] = useState([]);
    useEffect(() => {
        API.getClientData(setClientData);
    }, [])

    useEffect(() => {
        if (!isRevealed)
            setIsRevealed(reveal);
    }, [isRevealed, reveal])

    useEffect(() => {
        if (isRevealed) {
            gsap.to(
                '.client .fade-up',
                AnimConfig.fadeUpConfig
            );
        }
    }, [isRevealed]);


    return (
        <div ref={sectionRef} data-scroll-section>
            <div
                style={{ backgroundImage: `url(${ HOME_BG.About })` }}
                className="client min-h-screen w-full object-cover justify-center items-center p-10 tablet:py-16 mac:py-24 ultrawide:py-36 tablet:px-28 laptop:px-44"
            >
                <div className="text-base laptop:text-xl fade-up">Clientele</div>

                <div className="mt-4 mac:mt-12 text-3xl tablet:text-6xl font-light fade-up">Trusted by</div>

                <div className="mt-8 mac:mt-12 ultrawide:mt-20 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mac:gap-8">
                    {clientData.map(d => <ClientItem key={d.id} data={d} />)}
                </div>
            </div>
        </div>
    )
}

export default Client