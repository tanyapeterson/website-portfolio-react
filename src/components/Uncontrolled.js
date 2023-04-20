import { useRef } from "react";


const UnControlled = () => {
    const inputRef = useRef();
    const inputMessage = useRef();
    const inputEmail = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        alert("Name: " + inputRef.current.value + "Message: " + inputMessage.current.value + "Email: " + inputEmail.current.value)
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input className="uncontrolled"
                    type="text"
                    name="name" ref={inputRef} />
                <label htmlFor="email">Email</label>
                <input className="input-message" type="message" placeholder="your email" id="message" name="email" ref={inputEmail} />

                <label htmlFor="message">Message</label>
                <input className="input-message" type="message" placeholder="Say hello!" id="message" name="message" ref={inputMessage} />

                <input type="submit" value="submit" />
            </form>



        </>
    );
};

export default UnControlled; 