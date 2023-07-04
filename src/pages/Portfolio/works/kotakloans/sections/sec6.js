import React, { useRef } from "react";
import { PrevNext } from "@components";
import { useNavigate } from 'react-router-dom';

function Sec6(props) {
    const navigate = useNavigate();
    const sectionRef = useRef();

    return (
        <div ref={sectionRef} data-scroll-section>
            <div id={props.id}>
                <PrevNext
                    navigate={navigate}
                    nextWork="/works/ketobalanced"
                    css="px-4 tablet:px-12  laptop:px-28 py-12 bg-black"
                />
            </div>
        </div>
    )
}

export default Sec6