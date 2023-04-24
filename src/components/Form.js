import { useState } from "react";// using this react hook to give a reactive value to my contact form.

import ReuseButton from "./ReuseButton";

const FormPage = ({ message, setMessage }) => { //"message" for the main message in the input fields and "setMessage" for the new info-input after the click

    const [inputName, setInputName] = useState(""); //"inputName" for the main/ original name input and setInputName for the name input in the form-input field
    const [inputMessage, setInputMessage] = useState(""); //read description above
    const [inputEmail, setInputEmail] = useState("");// read description above
    const submitHandler = (e) => { //function that will present form data if the form is validated
        e.preventDefault();
        setMessage((message) => [...message, { name: inputName, Email: inputEmail, Message: inputMessage }]);
        setInputName("")
        setInputEmail("")
        setInputMessage("")
    }
    return (
        <>
            <div className="contact-container">
                <div className="contact-text">
                    <p className="contact-me">Let's keep in touch.
                    </p>

                </div>
                <div className="form-background">

                    <form className="form-container" onSubmit={submitHandler}>
                        <div className="name-box">
                            <label htmlFor="name">Name</label>
                            <input required type="text" type="text" placeholder="Your name here" id="name" name="name" value={inputName} onChange={(e) => setInputName(e.target.value)} /></div>
                        <div className="email-box"><label htmlFor="email">Email</label>
                            <input required type="email" type="email" placeholder="Your email here" id="email" name="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} /></div>

                        <div className="message-box"> <label htmlFor="message">Message</label>
                            <input required type="text" className="input-message" type="message" placeholder="Your message here" id="message" name="message" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} /></div>
                        <div className="contact-btn">
                            <ReuseButton type="submit" value="submit" >Send</ReuseButton>
                        </div>







                    </form>


                </div>
            </div></>


    );
};



export default FormPage; 