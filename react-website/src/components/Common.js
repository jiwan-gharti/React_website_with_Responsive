import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props) =>{
    return(
        <section id="header"  className="d-flex align-items-center flex-colum">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-lg-5 order-lg-1 order-2 d-flex justify-content-center flex-column">
                                <h2>Grow your Business with <strong className="navbar-brand">NawiJBlog.</strong></h2>
                                <h4 className="my-3">
                                   {props.title}
                                </h4>
                                <div className="mt-3">
                                    <NavLink
                                        exact
                                        to={props.visit}
                                        className="btn btn-primary bg-transparent text-dark rounded-pill btn_style"
                                    >
                                        {props.contactBtn}
                                    </NavLink>
                                </div>
                            </div>

                            <div className="col-md-6 pt-lg-5 order-lg-1 order-2" style={{height:'70vh'}}>
                                <img
                                    src={props.imgsrc}
                                    width="100%" height="100%"
                                    alt="..."
                                    className="image-fluid animated_image" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Common