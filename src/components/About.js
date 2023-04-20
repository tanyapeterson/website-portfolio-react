import ImageDisplay2 from "./ImageDisplay2";
import ImageDisplay3 from "./ImageDisplay3";


const aboutPage = () => {
    return (
        <>
            <div className="about-container-1">
                <div className="story-container">
                    <h3 className="my-story">My Story.</h3>
                    <p className="story-txt-1">
                        For as long as I can remember I have been drawn to creating things on the computer. Whether that is something on Microsoft Paint, Powerpoint or even Word. Just sitting by my computer and creating something just gets me into a state of total flow.
                    </p></div>
                <div className="flower-container">
                    <ImageDisplay2 />
                </div>

            </div>
            <div className="about-container-2">
                <div className="coffee-container">
                    <ImageDisplay3 />
                </div>
                <div className="story-container-2">
                    <h3 className="forward">Fast forward.</h3>
                    <p className="story-txt-2">
                        I would love to use my passion for the creative, design and visuals to help you get the most out of your business. Let us be creative toghether!
                    </p></div>


            </div>

        </>






    );
};

export default aboutPage; 