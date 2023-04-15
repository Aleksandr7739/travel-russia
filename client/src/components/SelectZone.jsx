import React, { useState, useEffect } from 'react';

function SelectZone() {
    const getRussianCities = async () => {
        const response = await fetch('http://localhost:5000/travel-city');
        const data = await response.json();
        console.log(data);
    };
    return (
        <>
            <div>
                <div onClick={() => { getRussianCities() }}>Россия</div>
                <div>Мир</div>
            </div>
        </>
    )
}

export default SelectZone;