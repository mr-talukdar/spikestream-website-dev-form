import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useOnScreen from "../hooks/useOnScreen";
import { Link } from "react-router-dom";
const Footer = (props) => {
    const itemRef = useRef();
    const reveal = useOnScreen(itemRef);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        if (!isRevealed)
            setIsRevealed(reveal);
    }, [isRevealed, reveal])

    useEffect(() => {
        if (!props.skipAnim) {
            if (isRevealed) {
                gsap.to(
                    '.footer .fade-up',
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.05,
                        delay: 0.1,
                        ease: 'linear'
                    }
                );
            }
        }
    }, [isRevealed]);

    return (
        <footer ref={itemRef} className={`footer ${ props.css ? props.css : '' }`}>
            <div className={`${ props && !props.skipAnim ? 'fade-up' : '' } flex justify-between items-center text-subtle font-normal text-sm tablet:text-base`}>
                <Link
                    to="/privacy-policy"
                    className="cursor-pointer">
                    Terms & Policies
                </Link>
                <div className="hidden tablet:block">&copy;2023 Spike Stream. All Rights Reserved</div>
                <div className="tablet:hidden">&copy;2023 Spike Stream</div>
            </div>
        </footer>
    );
};

export default Footer;
