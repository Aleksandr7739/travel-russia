import React, { useState, useEffect } from 'react';
import "./css-for-components/ForeingCountries.css";
import { Link } from "react-router-dom";
import { Card, Carousel } from "antd";

const contentStyle = {
    height: '470px',
    color: '#fff',
    lineHeight: '470px',
    textAlign: 'center',
    background: '#364d79',
};

function ForeingCountries() {
    return (
        <div className='beach'>
                <div className="nav">
                    <div className="search_btn"></div>
                    <div className="nav_btns">
                        <div><Link to={'/'} className='links'><img className="logo" ></img></Link></div>
                        <div><Link to={'/popular-tours'} className='links'>Популярные туры</Link></div>
                        <div><Link to={'/avia-tickets'} className='links'>Авиабилеты</Link></div>
                        <div><Link to={'/excursions'} className='links'>Экскурсии</Link></div>
                        <div><Link to={'/sales'} className='links'>Распродажи</Link></div>
                    </div>
                </div>     
                <div style={{ width: "70%", margin: "150px auto 0px" }}>
                    <Carousel autoplay>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </div>
                <div className="cards" style={{ marginTop: "150px" }}>
                    <Card className='card'></Card>
                    <Card className='card'></Card>
                    <Card className='card'></Card>
                    <Card className='card'></Card>
                </div>
                <div className="cards1">
                    <Card className='card'></Card>
                    <Card className='card'></Card>
                    <Card className='card'></Card>
                    <Card className='card'></Card>
                </div>
            </div>
    )
}

export default ForeingCountries;