import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () =>{
    return (
        <>
        <div className="container-fluid bg_nav">
            <div className="row">
                <div className="col-10 mx-auto">              
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                        <div className="container-fluid">
                            
                            <NavLink exact
                                className="navbar-brand"
                                to="/"
                            >
                                Nawi<span className="brand_decoration">JB</span>log
                            </NavLink>

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"

                            >
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        
                                        <NavLink exact
                                            className="nav-link"
                                            aria-current="page"
                                            to="/"
                                            activeClassName="navbar_active"
                                        >
                                            Home
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        
                                        <NavLink exact
                                            className="nav-link"
                                            aria-current="page"
                                            to="/service"
                                            activeClassName="navbar_active"
                                        >
                                            Service
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        
                                        <NavLink exact
                                            className="nav-link"
                                            aria-current="page"
                                            to="/about"
                                            activeClassName="navbar_active"
                                        >
                                            About
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        
                                        <NavLink exact
                                            className="nav-link"
                                            aria-current="page"
                                            to="/contact"
                                            activeClassName="navbar_active"
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;