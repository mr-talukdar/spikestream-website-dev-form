import InputField from "./components/inputField"
import MobileInputField from "./components/mobileInputField"
import { useEffect, useState } from "react"
import { Oval } from "react-loader-spinner"
import emailjs from "@emailjs/browser"
import { PORTFOLIO_IMAGES } from "@images"
const Form = ({ open, setOpen }) => {
    const [name, setName] = useState("")

    const [number, setNumber] = useState("")

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [sending, setSending] = useState(false)
    const [dataSent, setDataSent] = useState(true)
    const [sendStatus, setSendStatus] = useState(false)

    const SetName = (value) => {
        setName(value)
    }

    const SetNumber = (value) => {
        setNumber(value)
    }
    const SetEmail = (value) => {
        setEmail(value)
    }
    const SetMessage = (value) => {
        setMessage(value)
    }

    useEffect(() => {
        setSending(false)
        setDataSent(false)
        setSendStatus(false)
    }, [])

    const resetForm = () => {
        setEmail("")
        setMessage("")
        setName("")
        setNumber("")

        setSending(false)
        setDataSent(false)
        setSendStatus(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSending(true)

        emailjs
            .send(
                "service_martin",
                "template_zy46tnh",
                {
                    from_name: name,
                    to_name: "Martin",
                    message: message,
                    email: email,
                    number: number,
                },
                "WNZDTkf_OU5ctOioK"
            )
            .then(
                () => {
                    setSending(false)
                    setDataSent(true)
                    setSendStatus(true)
                },
                (error) => {
                    setSending(false)
                    setDataSent(true)
                    setSendStatus(false)
                }
            )
    }

    function getMainContent() {
        if (sending) {
            return (
                <div className="w-full h-full flex justify-center items-center">
                    <Oval
                        height={60}
                        width={60}
                        color="#FF8933"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#444"
                        strokeWidth={4}
                        strokeWidthSecondary={4}
                    />
                </div>
            )
        } else if (dataSent) {
            if (sendStatus) {
                return (
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <img
                            src={PORTFOLIO_IMAGES.form_success}
                            alt={PORTFOLIO_IMAGES.form_success}
                        />
                        <div className="mt-12 font-graphik font-light text-2xl tablet:text-[70px] text-center">
                            Thank you, we will get back to you soon
                        </div>
                    </div>
                )
            }
            return (
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <img
                        src={PORTFOLIO_IMAGES.form_error}
                        alt={PORTFOLIO_IMAGES.form_error}
                    />
                    <div className="mt-12 font-graphik font-light text-2xl tablet:text-[70px] text-center">
                        Sorry, something went wrong
                    </div>
                    <div
                        onClick={resetForm}
                        className="mt-12 bg-accent rounded-full w-36 h-10 laptop:mt-20 laptop:w-40 laptop:h-12 flex justify-center items-center text-black font-graphik cursor-pointer"
                    >
                        Retry
                    </div>
                </div>
            )
        }
        return (
            <div className="font-graphik">
                <div className="w-11/12 font-light text-3xl laptop:text-6xl laptop:leading-regular">
                    Let’s create your next significant<br />impact together.
                </div>
                <div className="mt-4 laptop:mt-12 text-accent smallphone:w-2/3 w-5/6 smallphone:text-sm text-base laptop:text-lg">
                    Share your details and let us get back to you
                </div>

                <div className="mt-4 laptop:mt-16">
                    <form onSubmit={handleSubmit} className="flex-row gap-10">
                        <div className="flex flex-col laptop:pb-8 laptop:flex-row laptop:gap-8 ">
                            <InputField
                                label="Full Name"
                                OnChange={SetName}
                                type="text"
                                value={name}
                            />
                            <InputField
                                label="Email Id"
                                OnChange={SetEmail}
                                type="email"
                                value={email}
                            />
                            <MobileInputField
                                value={number}
                                OnChange={SetNumber}
                            />
                        </div>
                        <InputField
                            label="Your Message"
                            message={true}
                            OnChange={SetMessage}
                            value={message}
                        />
                        <button
                            type="submit"
                            className="bg-accent rounded-full w-36 h-10 laptop:mt-8 laptop:w-40 laptop:h-12"
                        >
                            <span className="text-black text-base">
                                {sending ? "Sending..." : "Send"}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <nav
            className={`menu fixed flex flex-col top-0 left-0 w-full p-10 laptop:px-40 z-50 h-screen py-20 laptop:py-32 bg-black transform delay-100 transition-all duration-500 ${ open
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
                }`}
        >
            <div className="absolute top-8 right-8">
                <button
                    className="text-subtle flex flex-row items-center"
                    onClick={() => {
                        setSending(false)
                        setDataSent(false)
                        setSendStatus(false)
                        setOpen(false)
                    }}
                >
                    <span>Close</span>
                    <svg
                        className="ml-2 h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6.7 6.7a1 1 0 0 1 1.4 0L12 10.6l3.9-3.9a1 1 0 1 1 1.4 1.4L13.4 12l3.9 3.9a1 1 0 1 1-1.4 1.4L12 13.4l-3.9 3.9a1 1 0 0 1-1.4-1.4L10.6 12 6.7 8.1a1 1 0 0 1 0-1.4z" />
                    </svg>
                </button>
            </div>
            {getMainContent()}
        </nav>
    )
}

export default Form
