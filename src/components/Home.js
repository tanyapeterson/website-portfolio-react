
import ReuseButton from "./ReuseButton";
import { Link } from "react-router-dom";
import ImageDisplay from "./ImageDisplay";
const homePage = () => {
    return (
        <>
            <div className="home-container">
                <div className="info-container">
                    <h1 className="home-title">I'm Tanya Peterson.</h1>
                    <p className="home-sub">a website designer and front end developer with a passion for the simple and minimalistic design.</p>
                    <div className="home-btn-container"><Link to="/about"><ReuseButton>Learn More</ReuseButton></Link></div>

                </div>
                <ImageDisplay />
            </div >

        </>
    );
};

export default homePage; 