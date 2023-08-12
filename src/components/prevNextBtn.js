import React from "react";
import { BLOG_IMAGES } from "@images";

function PrevNext(props) {
    function navigateToWorks() {
        props.navigate("/digital-marketing-services-works");
    }

    function navigateToNextWork() {
        props.navigate(props.nextWork);
    }

    return (
        <div className={`w-full flex flex-col tablet:flex-row items-center justify-between gap-10 tablet:gap-0 ${ props.css ? props.css : '' }`}>
            <div className='order-2 tablet:order-1 flex flex-row items-center cursor-pointer gap-1' onClick={navigateToWorks}>
                <img src={BLOG_IMAGES.Prev} alt={BLOG_IMAGES.Prev} className='w-[17px] h-[17px] object-contain' />
                <div className='text-accent font-light text-sm'>Featured Work</div>
            </div>

            <div className='order-1 tablet:order-2 flex flex-row items-center cursor-pointer gap-1' onClick={navigateToNextWork}>
                <div className={'text-white font-light text-sm'}>Next Work</div>
                <img src={BLOG_IMAGES.Next} alt={BLOG_IMAGES.Next} className={'w-[17px] h-[17px] object-contain'} />
            </div>
        </div>
    )
}

export default PrevNext