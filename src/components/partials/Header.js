import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
    useEffect(() => {
    }, [props.TodoCount])
    return <>
        <div className="col-md-12 header nopadding">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto col-md-9 nopadding">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 nav-link">
                            <Link to="/" className="btn  btn-success"><i className="fas fa-home"> Home</i></Link>
                            <Link to="/todos" className="btn  btn-success"><i className="fas fa-list"> Todos</i></Link>
                            <Link to="/weather" className="btn  btn-success"><i className="fas fa-cloud-moon-rain">  Weather</i></Link>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-outline-success my-2 my-sm-0 item" ><i className=" fas fa-shopping-cart">
                        </i ><span className=""> {props.TodoCount} </span></button>
                    </div>
                </div>
            </nav>
        </div>
    </>
}
export default Header;