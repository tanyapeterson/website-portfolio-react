
import { Link } from "react-router-dom";

const navBar = () => { //this is the navbar function with all the links to different pages using the Link function from the react-dom library
    return (
        <nav className="nav">
            <Link to="/" className="nav-title">tp.</Link>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li>
                    <Link to="/about">About</Link></li>
                <li>  <Link to="/contact">Contact</Link></li>

            </ul>
        </nav>
    )
}

export default navBar;