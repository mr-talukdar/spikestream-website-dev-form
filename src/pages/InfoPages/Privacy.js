import React, { useState, useRef, useEffect } from 'react'
import Menu from "../Menu";
import { General, Header, Footer } from "@components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
function Privacy() {
    const containerRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

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
                <main data-scroll-container ref={containerRef}>
                    {
                        <General.CanvasContainer isWideScreen={false}>
                            <div className="bg-[#2C2C2C] w-screen min-h-screen">
                                <div className="px-10 py-20 laptop:py-20 laptop:px-28">
                                    <div className="font-graphik font-light text-3xl laptop:text-5xl">
                                        Privacy Policy
                                    </div>

                                    <div className="mt-12 font-graphik text-sm tablet:text-md text-[#B1B1B1]">
                                        <div>
                                            This privacy policy describes how www.spikestream.co collects, uses, and shares your personal information when you visit our website.
                                        </div>

                                        <div className='mt-8'>
                                            <div className='text-white font-medium'>
                                                Personal information we collect
                                            </div>
                                            <div className='mt-2'>
                                                When you visit our website, we collect certain information about your device, including your IP address, browser type, operating system, and some of the pages you visit. We collect this information to better understand how people use our website and to improve our services.
                                            </div>
                                        </div>

                                        <div className='mt-8'>
                                            We also collect personal information that you voluntarily provide to us, such as your name, email address, and phone no. We use this information to communicate with you.
                                        </div>

                                        <div className='mt-8'>
                                            <div className='text-white font-medium'>
                                                How we use your personal information
                                            </div>
                                            <div className='mt-2'>
                                                We use the information we collect from you to:
                                                <div className='mt-2'>
                                                    - Improve our website and services
                                                    <br />
                                                    - Send you marketing communications
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-8'>
                                            <div className='text-white font-medium'>
                                                How we share your personal information
                                            </div>
                                            <div className='mt-2'>
                                                We do not sell or rent your personal information to third parties for their marketing purposes without your consent.
                                            </div>
                                        </div>

                                        <div className='mt-8'>
                                            <div className='text-white font-medium'>
                                                Your privacy choices
                                            </div>
                                            <div className='mt-2'>
                                                You can choose to have your personal information deleted from our records. To do this, please contact us at martin@spikestream.co
                                            </div>
                                        </div>

                                        <div className='mt-8'>
                                            <div className='text-white font-medium'>
                                                Your privacy choices
                                            </div>
                                            <div className='mt-2'>
                                                You can choose to have your personal information deleted from our records. To do this, please contact us at martin@spikestream.co
                                            </div>
                                        </div>

                                        <div className='mt-8'>
                                            <div className='text-white font-medium'>
                                                Changes to our privacy policy
                                            </div>
                                            <div className='mt-2'>
                                                We may update this privacy policy from time to time. Any changes will be posted on this page.
                                            </div>
                                        </div>

                                        <div className='mt-8'>
                                            <div className='text-white font-medium'>
                                                Contact us
                                            </div>
                                            <div className='mt-2'>
                                                If you have any questions about this privacy policy, please contact us at martin@spikestream.co
                                            </div>
                                        </div>
                                    </div>

                                    <footer className="mt-20">
                                        <div className='flex justify-between items-center text-subtle font-normal text-sm tablet:text-base'>
                                            <div
                                                className="cursor-pointer">
                                                Privacy Policy
                                            </div>
                                            <div className="hidden tablet:block">&copy;2023 Spike Stream. All Rights Reserved</div>
                                            <div className="tablet:hidden">&copy;2023 Spike Stream</div>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        </General.CanvasContainer>
                    }
                </main>
            </LocomotiveScrollProvider>
        </>
    )
}

export default Privacy