import React, { useState, useEffect } from 'react';
import "./css-for-components/FCity.css"
import { Link } from "react-router-dom";
import FlyTickets from './FlyTickets';

function FCity() {
    return (
        <div className='city-info'>
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
            <div className="map"></div>
            <div className='info'>
                <h1>Название тура</h1>
                Его краткое описание здесь. Сюда также можно поместить информацию о преимуществах места, основных достопримечательностях.Ниже в галерее добавить картинки с главными памятниками культуры и природы, с значимыми местами, которые обязательно стоит посетить.Описание тура лучше сделать сначала, чтобы пользователь сразу мог понять, какое место предлагается.
            </div>
            <div className="tickets">
                <h1>Возможные билеты</h1>
                <FlyTickets/>
            </div>
        </div>
    )
}

export default FCity;