import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { HOME_ICONS } from "../../../images";

import useOnScreen from "../../../hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'
import PrinciplesTemplate from "./principles-section/template";

const Section = styled.section`
  position: relative;
  min-height: 150vh;
  overflow: hidden;
`;

function Principles() {
    const sectionRef = useRef();
    const reveal = useOnScreen(sectionRef);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        if (!isRevealed)
            setIsRevealed(reveal);
    }, [isRevealed, reveal])

    useEffect(() => {
        if (isRevealed) {
            gsap.to(
                '.principles .fade-up',
                AnimConfig.fadeUpConfig
            );
        }
    }, [isRevealed]);

    return (
        <Section className="principles bg-black pb-10" ref={sectionRef} data-scroll-section>
            <div className="laptop:py-12 mac:py-24 ultrawide:py-36">
            <h3 className="px-10 pt-16 tablet:px-28 laptop:px-44 text-base laptop:text-xl intro-section-header text-accent fade-up">Our Guiding Principles</h3>
            <div className="px-10 tablet:px-28 laptop:px-44 desktop:flex desktop:flex-col">
                <PrinciplesTemplate icon={HOME_ICONS.Heart}
                    identifier='principle-heart' title='Empathy is the\nonly way forward' body='We believe that empathy lies at the heart of every thriving business. Your customers will not engage unless your product or experience understands their desires, motivations, needs, and expectations.' />

                <PrinciplesTemplate icon={HOME_ICONS.Brain}
                    identifier='principle-brain' title='Experiences do not\ntake place on screens' body='It’s not about the stylish animations or cool transitions on the user interface or a visually stunning design. What matters is whether people can use it smoothly and accomplish their tasks with ease, as experiences occur not on a screen but in the mind.' />

                <PrinciplesTemplate icon={HOME_ICONS.Finger}
                    identifier='principle-finger' title='People are not numbers' body='Numbers do help to understand where your business stands. But to establish a deeper connection, look into their emotions, personalities, and attitudes. Numbers do tell how many people have invested in your product, but they don’t indicate if they are happy with it.' />
            </div>
            </div>
        </Section>
    );
}

export default Principles;
