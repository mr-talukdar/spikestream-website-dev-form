import InputField from "../Portfolio/components/inputField"
import MobileInputField from "../Portfolio/components/mobileInputField"
import { useEffect, useState } from "react"
import { Oval } from "react-loader-spinner"
import emailjs from "@emailjs/browser"
import { PORTFOLIO_IMAGES } from "@images"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ open, setOpen }) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const navigate = useNavigate()

    const [name, setName] = useState("")

    const [number, setNumber] = useState("")
    const [country, setCountry] = useState('IN');
    const [mRegex, setMobileRegex] = useState(/^(\+?91|0)?[6789]\d{9}$/)

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [sending, setSending] = useState(false)
    const [dataSent, setDataSent] = useState(true)
    const [sendStatus, setSendStatus] = useState(false)

    const SetName = (value) => {
        setName(value);
        updateButtonState();
    }

    const SetNumber = (value) => {
        setNumber(value);
        updateButtonState();
    }
    const SetCountry = (value) => {
        setCountry(value)
        setMobileRegex(mobileRegex[value]);
    }
    const SetEmail = (value) => {
        setEmail(value);
        updateButtonState();
    }
    const SetMessage = (value) => {
        setMessage(value);
        updateButtonState();
    }

    const emailRegex = /\S+@\S+\.\S+/;
    function checkValidEmail(email){
        return emailRegex.test(email);
    }

    const mobileRegex = {
        "AM": /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
        "AE": /^((\+?971)|0)?5[024568]\d{7}$/,
        "BH": /^(\+?973)?(3|6)\d{7}$/,
        "DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
        "EG": /^((\+?20)|0)?1[0125]\d{8}$/,
        "IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
        "JO": /^(\+?962|0)?7[789]\d{7}$/,
        "KW": /^(\+?965)[569]\d{7}$/,
        "SA": /^(!?(\+?966)|0)?5\d{8}$/,
        "SY": /^(!?(\+?963)|0)?9\d{8}$/,
        "TN": /^(\+?216)?[2459]\d{7}$/,
        "BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
        "BG": /^(\+?359|0)?8[789]\d{7}$/,
        "BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
        "CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
        "DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
        "DE": /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
        "AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
        "GR": /^(\+?30|0)?(69\d{8})$/,
        "AU": /^(\+?61|0)4\d{8}$/,
        "GB": /^(\+?44|0)7\d{9}$/,
        "GG": /^(\+?44|0)1481\d{6}$/,
        "GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
        "HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
        "MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
        "IE": /^(\+?353|0)8[356789]\d{7}$/,
        "IN": /^(\+?91|0)?[6789]\d{9}$/,
        "KE": /^(\+?254|0)(7|1)\d{8}$/,
        "MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
        "MU": /^(\+?230|0)?\d{8}$/,
        "NG": /^(\+?234|0)?[789]\d{9}$/,
        "NZ": /^(\+?64|0)[28]\d{7,9}$/,
        "PK": /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
        "RW": /^(\+?250|0)?[7]\d{8}$/,
        "SG": /^(\+65)?[89]\d{7}$/,
        "SL": /^(?:0|94|\+94)?(7(0|1|2|5|6|7|8)( |-)?\d)\d{6}$/,
        "TZ": /^(\+?255|0)?[67]\d{8}$/,
        "UG": /^(\+?256|0)?[7]\d{8}$/,
        "US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
        "ZA": /^(\+?27|0)\d{9}$/,
        "ZM": /^(\+?26)?09[567]\d{7}$/,
        "CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
        "EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
        "ES": /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
        "MX": /^(\+?52)?(1|01)?\d{10,11}$/,
        "PA": /^(\+?507)\d{7,8}$/,
        "PY": /^(\+?595|0)9[9876]\d{7}$/,
        "UY": /^(\+598|0)9[1-9][\d]{6}$/,
        "EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
        "IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
        "FI": /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
        "FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
        "FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
        "FR": /^(\+?33|0)[67]\d{8}$/,
        "GF": /^(\+?594|0|00594)[67]\d{8}$/,
        "GP": /^(\+?590|0|00590)[67]\d{8}$/,
        "MQ": /^(\+?596|0|00596)[67]\d{8}$/,
        "RE": /^(\+?262|0|00262)[67]\d{8}$/,
        "IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
        "HU": /^(\+?36)(20|30|70)\d{7}$/,
        "ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
        "IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
        "JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
        "KZ": /^(\+?7|8)?7\d{9}$/,
        "GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
        "KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
        "LT": /^(\+370|8)\d{8}$/,
        "MY": /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
        "NO": /^(\+?47)?[49]\d{7}$/,
        "NP": /^(\+?977)?9[78]\d{8}$/,
        "BE": /^(\+?32|0)4?\d{8}$/,
        "NL": /^(\+?31|0)6?\d{8}$/,
        "PL": /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
        "BR": /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
        "PT": /^(\+?351)?9[1236]\d{7}$/,
        "RO": /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
        "RU": /^(\+?7|8)?9\d{9}$/,
        "SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
        "SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
        "RS": /^(\+3816|06)[- \d]{5,9}$/,
        "SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
        "TH": /^(\+66|66|0)\d{9}$/,
        "TR": /^(\+?90|0)?5\d{9}$/,
        "UA": /^(\+?38|8)?0\d{9}$/,
        "VN": /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,
        "CN": /^((\+|00)86)?1([358][0-9]|4[579]|6[67]|7[01235678]|9[189])[0-9]{8}$/,
        "TW": /^(\+?886\-?|0)?9\d{8}$/
    }

    function checkIfValidMobileNumber(number){
        return mRegex.test(number);
    }

    function updateButtonState(){
        setIsDisabled(!name || !email || !number || !message);
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
        if(!name) toast.error("Name is a required field!");
        else if(!email) toast.error("Email is a required field!");
        else if(!number) toast.error("Phone number is a required field!");
        else if(!message) toast.error("Message cannot be empty!");
        else{
            if(!checkValidEmail(email)) toast.error("Email is invalid!");
            if(!checkIfValidMobileNumber(number)) toast.error("Phone number is invalid!");
            else {
                setIsDisabled(false);
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
        }
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
                        <div className="mt-12 font-graphik font-light text-2xl tablet:text-5xl text-center">
                            Thank you, we will get back
                            <br />
                            to you soon
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
                    <div className="mt-12 font-graphik font-light text-2xl tablet:text-5xl text-center">
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
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    newestOnTop={true}
                    closeOnClick
                    pauseOnHover
                    theme="colored" />
                <div className="w-11/12 font-light text-3xl laptop:text-6xl laptop:leading-regular">
                    Let’s create your next significant
                    <br />
                    impact together.
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
                                OnCountryChange={SetCountry}
                                country={country}
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
                            className={`${isDisabled ? "bg-[#a15620]" : "bg-accent"} rounded-full w-36 h-10 laptop:mt-8 laptop:w-40 laptop:h-12`}
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
        <div className="p-10 laptop:px-40 z-50 h-[100svh] py-20 laptop:py-32">
            <div className="absolute top-8 right-8">
                <button
                    className="text-subtle flex flex-row items-center"
                    onClick={() => {
                        navigate(-1)
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
        </div>
    )
}

export default Form
