
import { useRef } from "react";
import ReuseButton from "./ReuseButton";

const FormPage = () => {

    const inputRef = useRef();
    const inputMessage = useRef();
    const inputEmail = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        alert("Name: " + inputRef.current.value + "Email: " + inputEmail.current.value + "Message: " + inputMessage.current.value)
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
                            <input type="text" placeholder="Your name" id="name" name="name" ref={inputRef} /></div>
                        <div className="email-box"><label htmlFor="email">Email</label>
                            <input type="email" placeholder="youremail@gmail.com" id="email" name="email" ref={inputEmail} /></div>

                        <div className="message-box"> <label htmlFor="message">Message</label>
                            <input className="input-message" type="message" placeholder="Say hello!" id="message" name="message" ref={inputMessage} /></div>
                        <div className="contact-btn">
                            <ReuseButton type="submit" value="submit" >Send</ReuseButton>
                        </div>







                    </form>


                </div>
            </div></>


    );
};



export default FormPage; 