import { useState } from "react";
import Form from "./Form";
import Modal from "./Modal";




const ContactPage = () => {
    const [status, setStatus] = useState(false);
    const [messages, setMessage] = useState([])

    return (
        <>
            <div className="contact-info-container">
                <div className="home-container">
                    <Form message={messages} setMessage={setMessage} />
                </div >
                <div>
                    {messages.map(message => {
                        return <div>
                            <p>{message.name}</p>
                            <p>{message.Email}</p>
                            <p>{message.Message}</p>

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