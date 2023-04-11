import React from "react";
import './navbar.css'
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <ul>
                <NavLink to="/"><li> Home </li></NavLink>
                <NavLink to="/instagram"><li> instagram </li></NavLink>
                <NavLink to="/github"><li> Github </li></NavLink>
                <NavLink to="/skype"><li> Skype </li></NavLink>
                <NavLink to="/flipkart"><li> Flipkart </li></NavLink>
                <NavLink to="/Netflix"><li> Netflix</li></NavLink>


            </ul>
        </div>        
        </>
    )
}

export default Navbar;