import './css-for-components/SelectZone.css';
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import ForeingCountries from './ForeingCountries';
import RussianCities from './RussianCities';


function SelectZone() {
    // const getRussianCities = async () => {
    //     const response = await fetch('http://localhost:5000/travel-city');
    //     const data = await response.json();
    //     console.log(data);onClick={() => { getRussianCities() }}
    return (
        <>
            <h1>Где вы собираетесь путешествовать?</h1>
            <div className='selection'>
                <Router>
                    <Link to={<RussianCities />}>Russia</Link>
                    <Link to="/foreing-countries">Other countries</Link>
                    <div>
                        <Routes>
                            <Route path="/russia" element={<RussianCities />} />
                            <Route path="/foreing-countries" element={<ForeingCountries />} />
                        </Routes>
                    </div>
                </Router >
            </div>
        </>
    );
}


export default SelectZone;