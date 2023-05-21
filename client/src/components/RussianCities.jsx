import React from "react";
import './css/RussianCities.css';
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const RussianCities = function () {
    return (
        <div className="russianCities" >
            <div className="nav">
                <div className="search_btn" onClick={() => { prompt('Введите запрос') }}></div>
                <Link to={'/popular-tours'}><h4 className="n1">Популярные туры</h4></Link> 
                <Link to={'/avia-tickets'}><h4 className="n1">Авиабилеты</h4></Link> 
                <Link to={'/excursions'}><h4 className="n1">Экскурсии</h4></Link>   
                <Link to={'/sales'}><h4 className="n1">Распродажи</h4></Link>
                <div><Link to={'/'}><img className="logo" alt=""></img></Link></div>
            </div>
            <div className="adds">
                <Marquee style={{ marginTop: '180px' }} pauseOnHover={true}>
                    Some adds
                </Marquee>
            </div>
            <div className="container">
                <Link to={'/city'}><div className="city"></div></Link> 
                <Link to={'/city'}><div className="city"></div></Link> 
                <Link to={'/city'}><div className="city"></div></Link> 
                <Link to={'/city'}><div className="city"></div></Link> 
            </div>
            <div className="container_2">
                <Link to={'/city'}><div className="city"></div></Link> 
                <Link to={'/city'}><div className="city"></div></Link> 
                <Link to={'/city'}><div className="city"></div></Link> 
                <Link to={'/city'}><div className="city"></div></Link> 
            </div>
        </div >
    )
}

export default RussianCities;
