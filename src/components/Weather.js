import React, { useState, useEffect } from "react";
import axios from "axios";
import Time from "./Time";
const Weather = (props) => {
    const [result, setResult] = useState('');
    const [main, setMain] = useState('');
    const [weather, setWeather] = useState([]);
    const [wind, setWind] = useState(0);
    const [cloud, setCloud] = useState(0);
    const [district, setDistrict] = useState('Dhaka');

    const selectDistrict =(e)=>{
        setDistrict(e.target.value);
    }
    
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${district}&appid=a98a95fae81f8e7585ddb488c8506a6d`);
            setResult(res);
        }
        getData();
    }, [district]);

    useEffect(() => {
        if (result.data) {
            setMain(result.data.main);
            setWeather(result.data.weather);
            setWind(result.data.wind);
            setCloud(result.data.clouds);
        }
    }, [result]);

    return <>
        <div className=" py-5 col-md-12">
            <div className="row d-flex justify-content-center align-items-center col-md-12">
                <div className="col-md-8 weather-bg">
                    <div className="my-4" style={{color:"white"}}><h3>{district}</h3></div>
                    <select className="form-control col-md-3" value={district}  onChange={selectDistrict}>
                        <option  selected>Slect District</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Comilla">Comilla</option>
                        <option value="Feni">Feni</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Khulna ">Khulna </option>
                        <option value="Kushtia">Kushtia  </option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Canada">Canada</option>
                        <option value="New York">New York</option>
                    </select>
                    <div className="card-body col-md-12 row">
                        <div className="col-md-4 row nopadding">
                            {
                                weather.length ?
                                    weather.map((val, index) => {
                                        return <div className="col-md-12 "> <h6 className="" style={{ color: "white" }}>
                                            <img src="./images/weather.jpg" height={100} width={100} /> {val.main}</h6>
                                            <h6 className="" style={{ color: "yellow" }}> {val.description}</h6> </div>
                                    })
                                    : <p></p>
                            }
                        </div>
                        <div className="col-md-5 nopaading">
                            <div className="col-md-12 row nopadding ">
                                <div clasName="col-md-4">
                                    <p className="font-weight-bold temperature fas fa-sun">  Temp</p>
                                    <h6 className="display-4  font-weight-bold" style={{ color: "white" }}>
                                        {Math.floor(main.temp - 273.12)}℃ </h6>
                                </div>
                                <div className="col-md-1"></div>
                                <div clasName="col-md-5" >
                                    <p className="font-weight-bold temperature fas fa-temperature-high">Feels Like </p>
                                    <h6 className="display-4 font-weight-bold" style={{ color: "whitesmoke" }}>
                                        {Math.floor(main.feels_like - 273.12)}℃ </h6>
                                </div>
                            </div>
                            <div className="row ">
                                <div clasName="col-md-5">
                                    <p className="font-weight-bold temperature"> 😮‍💨 Humidity</p>
                                    <h6 className="display-4 font-weight-bold" style={{ color: "whitesmoke" }}>
                                        {main.humidity} %</h6>
                                </div>
                                <div className="col-md-1"></div>
                                <div clasName="col-md-5">
                                    <p className="font-weight-bold temperature">☁️ Cloudy</p>
                                    <h6 className="display-4 font-weight-bold" style={{ color: "whitesmoke" }}>
                                        {cloud.all} %</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 row nopadding">
                            <div className=" col-md-12" style={{ fontSize: " 1rem" }}>
                                <div>
                                    <i className="fas fa-wind fa-fw" style={{ color: "yellow" }}> </i ><span style={{ color: "yellow" }}>
                                    Wind</span>  <span className="ms-1"> {wind.speed} km/h
                                    </span></div>
                                <div>
                                    <i className="fas fa-tint fa-fw" style={{ color: "yellow" }}></i><span style={{ color: "yellow" }}>
                                    Pressure</span><span className="ms-1"> {main.pressure / 100} Kpa</span>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <Time />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
}
export default Weather