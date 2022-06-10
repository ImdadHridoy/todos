import React from "react";

const Header = (props) => {
    const {TodoCount} = props;
    return <div className="row pad-40 ">
        <div className="sidebar col-md-2"></div>
        <div className="col-md-10 row">
            <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-blue">
                    <div className="inner">
                        <h3> {TodoCount} </h3>
                        <p> Total Todo </p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <a href="#" className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-blue">
                    <div className="inner">
                        <h3> 123 </h3>
                        <p> Total sacsac </p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <a href="#" className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-blue">
                    <div className="inner">
                        <h3> 123 </h3>
                        <p> Total accsc </p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <a href="#" className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
        </div>

    </div>
}
export default Header;