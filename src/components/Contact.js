import { useState } from "react"; // using this react hook to give a reactive value to my contact form. In this case the "message sent" box and the pop up/ modal. 
import Form from "./Form";
import Modal from "./Modal";



// this is the "contact" function
const ContactPage = () => {
    const [status, setStatus] = useState(false); //"status" for the main/ original status and setStatus for the new input after the click
    const [messages, setMessage] = useState([]) //"messages" for the original message and setMessage for the new input in the form

    return (
        <>
            <div className="contact-info-container">
                <div className="home-container">
                    <Form message={messages} setMessage={setMessage} />
                </div >
                <div>
                    {messages.map(message => {
                        return <div className="message-sent">
                            <p className="sent">YOUR MESSAGE HAS BEEN SENT!</p>
                            <p className="message">Name:</p>
                            <p className="message">{message.name}</p>
                            <p className="message">Email:</p>
                            <p className="message">{message.Email}</p>
                            <p className="message">Message:</p>
                            <p className="message">{message.Message}</p>

                        </div>
                    })}
                </div>

                <div className="call-container">
                    <p className="better">
                        Or even better.
                    </p>
                    <button onClick={() => setStatus(true)} className="book-call">Book a call!</button>

                    {status && (
                        <Modal close={() => setStatus(false)}>
                            <div className="modal-container">
                                <p>
                                    You are about to book a 60 minutes introduction call!
                                </p>
                            </div>

                        </Modal>

                    )}


                </div>
            </div>

        </>
    );
};

export default ContactPage; 