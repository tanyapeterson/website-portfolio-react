import { useState } from "react";
import Form from "./Form";
import Modal from "./Modal";




const ContactPage = () => {
    const [status, setStatus] = useState(false);

    return (
        <>
            <div className="contact-info-container">
                <div className="home-container">
                    <Form />
                </div >

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