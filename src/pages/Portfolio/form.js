import InputField from "./components/inputField";
import { useState } from "react";

import emailjs from "@emailjs/browser";

const Form = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);

  const SetName = (value) => {
    setName(value);
  };

  const SetNumber = (value) => {
    setNumber(value);
  };
  const SetEmail = (value) => {
    setEmail(value);
  };
  const SetMessage = (value) => {
    setMessage(value);
  };

  const resetForm = () => {
    setEmail("");
    setMessage("");
    setName("");
    setNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

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
          setSending(false);
          alert("Thank you. I will get back to you as soon as possible.");
          resetForm();
        },
        (error) => {
          setSending(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <nav
      className={`menu fixed flex flex-col top-0 left-0 w-full p-10 laptop:px-40 z-50 h-screen py-20 laptop:py-32 bg-black transform delay-100 transition-all duration-500 ${
        open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
      }`}
    >
      <div className="absolute top-8 right-8">
        <button
          className="text-subtle flex flex-row items-center"
          onClick={() => setOpen(false)}
        >
          <span>Close</span>
          <svg className="ml-2 h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M6.7 6.7a1 1 0 0 1 1.4 0L12 10.6l3.9-3.9a1 1 0 1 1 1.4 1.4L13.4 12l3.9 3.9a1 1 0 1 1-1.4 1.4L12 13.4l-3.9 3.9a1 1 0 0 1-1.4-1.4L10.6 12 6.7 8.1a1 1 0 0 1 0-1.4z" />
          </svg>
        </button>
      </div>

      <div className="font-graphik">
        <div className="w-11/12 font-light smallphone:text-2xl text-3xl laptop:text-6xl laptop:leading-regular">
          Would you like to see all the exciting work we have accomplished?
        </div>
        <div className="mt-4 laptop:mt-12 text-accent smallphone:w-2/3 w-5/6 smallphone:text-sm text-base laptop:text-lg">
          Share your details and let us get back to you
        </div>

        <div className="mt-4 laptop:mt-16">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col laptop:flex-row laptop:gap-8">
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
              <InputField
                label="Mobile No.    +91"
                OnChange={SetNumber}
                type="number"
                value={number}
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
    </nav>
  );
};

export default Form;
