import { Link } from "react-router-dom"; 
import "./Navbar.css"; 

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-links"> 
                <Link to="/">Home</Link>
                <Link to="/research">Research</Link>
                <Link to="/publications">Publications</Link>
                <Link to="/teaching">Teaching</Link>
                <Link to="/cv">CV</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    ); 
}
