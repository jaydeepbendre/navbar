import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <ul>
                <NavLink to="/"><li class="item"> Home </li></NavLink>
                <NavLink to="/instagram"><li class="item"> Instagram </li></NavLink>
                <NavLink to="/github"><li class="item"> Github </li></NavLink>
                <NavLink to="/skype"><li class="item"> Skype </li></NavLink>
                <NavLink to="/flipkart"><li class="item"> Flipkart </li></NavLink>
                <NavLink to="/Netflix"><li class="item"> Netflix</li></NavLink>


            </ul>
        </div>        
        </>
    )
}

export default Navbar;