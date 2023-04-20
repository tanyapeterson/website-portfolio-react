import rose from "../images/rose.jpeg";
const imageDisplay = () => {
    return (
        <div className="bird-container" >
            <img className="bird" src={rose} alt="line-rose" />
        </div>
    );
};

export default imageDisplay;