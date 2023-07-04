import { useEffect } from "react";
import Scrollbar from 'smooth-scrollbar';


var options={
    damping: 0.07,
}

const Scroll=()=>{
    useEffect(()=>{
        Scrollbar.init(document.querySelector('#celestial-detail-container'),options)
    },[])

    return null;
}

export default Scroll;