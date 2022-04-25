import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Signin from "./Signin";
import { NavLink } from "react-router-dom";
const Navlink = ()=>{
    return (<>

    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink className="nav-link" to="/" element={<Home/>} aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/service" element={<Service/>}>Service</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/about" element={<About/>}>About Us</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/contact" element={<Contact/>}>Contact Us</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/signin" element={<Signin/>}>SignIn</NavLink>
        </li>  
    </ul>
    
    </>);
}

export default Navlink;