import { MdClose } from "react-icons/md";

const modalPage = ({ children, close }) => {
    return (
        <>
            <div className="overlay">
                <div className="content">
                    <MdClose className="close" onClick={close} />
                    {children}
                </div>
            </div>



        </>
    );
};

export default modalPage; 