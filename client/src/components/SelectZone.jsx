import './css-for-components/SelectZone.css';
import React, { useState, useEffect } from 'react';


function SelectZone() {
    const getRussianCities = async () => {
        const response = await fetch('http://localhost:5000/travel-city');
        const data = await response.json();
        console.log(data);
    };
    return (
        <>
            <h1>Где вы собираетесь путешествовать?</h1>
            <div className='selection'>
                <div className='russia' onClick={() => { getRussianCities() }}>russia</div>
                <div className='globus'>Мир</div>
            </div>
        </>
    )
}

export default SelectZone;