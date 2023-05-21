import React from "react";
import './css-for-components/RussianCities.css';
import { Link } from "react-router-dom";

const RussianCities = function () {
    return (
        <div className="russianCities" >
            <div className="nav">
                <div className="search_btn"></div>
                <div><Link to={'/'}>Главная</Link></div>
                <h4 className="n1">Популярные туры</h4>
                <h4 className="n1">Авиабилеты</h4>
                <h4 className="n1">Экскурсии</h4>
                <h4 className="n1">Распродажи</h4>
                <div className="logo" ></div>
            </div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="..." class="d-block w-10" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-10" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-10" alt="..." />
                    </div>
                </div>
            </div>
            <div className="city"></div>
            <div className="city_1"></div>
            <div className="city_2"></div>
            <div className="city_3"></div>
            <div className="city_4"></div>
            <div className="city_5"></div>
            <div className="city_6"></div>
            <div className="city_7"></div>
        </div>
    )
}

export default RussianCities