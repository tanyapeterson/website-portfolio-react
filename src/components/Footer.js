import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";


const footerBar = () => {
    return (
        <footer className="footer-bar">

            <ul>
                <li><Link to="/"><AiOutlineMail className="social" /></Link></li>
                <li><Link to="/"><BsInstagram className="social" /></Link></li>
                <li><Link to="/"><FaPinterestP className="social" /></Link></li>
                <li><Link to="/"><FiFacebook className="social" /></Link></li>



            </ul>
        </footer >
    )
}

export default footerBar;