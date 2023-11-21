import React from "react"

const ShareButton = (props) => {
    var openLink = () => {
        props.MenuOpen(false)
        console.log(props.menuOpen)
        window.open(props.url)
    }

    return (
        <div className=" rounded-full w-10 h-10 ">
            <button
                onClick={openLink}
                className=" w-full  h-full ml-0 mr-0 m-auto text-black "
            >
                <img src={props.icon} />
            </button>
        </div>
    )
}

export default ShareButton
