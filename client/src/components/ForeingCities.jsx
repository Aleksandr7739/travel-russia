import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function ForeingCities() {
    return (
        
            <div className="nav">
                    <div className="search_btn"></div>
                    <div className="nav_btns">
                        <div><Link to={'/'}><img className="logo" ></img></Link></div>
                        <div><Link to={'/popular-tours'}>Популярные туры</Link></div>
                        <div><Link to={'/avia-tickets'}>Авиабилеты</Link></div>
                        <div><Link to={'/excursions'}>Экскурсии</Link></div>
                        <div><Link to={'/sales'}>Распродажи</Link></div>
                    </div>
            </div>  
    )
}

export default ForeingCities;