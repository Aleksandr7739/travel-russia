import React, { useState, useEffect } from 'react';
import "./css-for-components/ForeingCountries.css";


function ForeingCountries() {

    return (
        <>
            <div className='beach'>
                <div className="nav">
                    <div className="search_btn"></div>
                    <div className="nav_btns">
                        <div>Популярные туры</div>
                        <div>Авиабилеты</div>
                        <div>Экскурсии</div>
                        <div>Распродажи</div>
                    </div>
                    <div className="logo" ></div>
                </div>
                <div className="adds"></div>
                <div className="cards">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="cards1">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default ForeingCountries;