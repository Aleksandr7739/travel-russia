import React from 'react';
import './css/City.css';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

function City() {
    return (
        <div className='town'>
          <div className='nav_city'>
                <div className="search" ></div>
                <Input placeholder="Введите запрос" className="search_field" />
                <div className='info'>
                    <Link to={'/popular-tours'}><div className="n2">Популярные туры</div></Link> 
                    <Link to={'/avia-tickets'}><div className="n2">Авиабилеты</div></Link> 
                    <Link to={'/excursions'}><div className="n2">Экскурсии</div></Link>
                    <Link to={'/sales'}><div className="n2">Распродажи</div></Link>
                </div>
                <Link to={'/'}><div className="tag"></div></Link> 
          </div>
          <div>
                <div className='map'></div>
                <div className='tickets'></div>
                <div className='tour'>
                    <h1>Название тура</h1>
                    <p>
                        Его краткое описание здесь. Сюда также можно поместить информацию о преимуществах места, основных достопримечательностях.Ниже в галерее добавить картинки с главными памятниками культуры и природы, с значимыми местами, которые обязательно стоит посетить.Описание тура лучше сделать сначала, чтобы пользователь сразу мог понять, какое место предлагается.
                    </p>
                    <div className='img_1'></div>
                    <div className='img_2'></div>
                    <div className='img_3'></div>
                </div>
          </div>
        </div>
    )
}

export default City;
