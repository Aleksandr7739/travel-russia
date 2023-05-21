import React, { useState, useEffect } from 'react';

function FlyTickets() {

    const [cityFrom, setCityFrom] = useState('');
    const [cityTo, setCityTo] = useState('');
    const [dateFrom, setDateFrom] = useState('2023-05-25');
    const [dateTo, setDateTo] = useState('2023-05-30');





    // 1. Создаем функцию отправки запроса по билетам на самолет
    // для это передаем в функцию дату, город отправления и прибытия
    // url: `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${req.query.cityFrom}&destination=${req.query.cityTo}&departure_at=${req.query.dateFrom}&return_at=${req.query.dateTo}&unique=false&sorting=price&direct=false&cy=rub&limit=30&page=1&one_way=true&token=YOURAPITOKEN`,
        
    const getFlyTickets = async ()=>{
        const reqComparison = await fetch(
            'http://localhost:5000/get-fly-tickets',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({cityFrom, cityTo, dateFrom, dateTo})
            });
        const arrSortUserId = await reqComparison.json();
        console.log(arrSortUserId)
    }

    return (
        <>
            <div>
                <input type="text" onChange={(e)=>setCityFrom(e.target.value)}/>
                <input type="text" onChange={(e)=>setCityTo(e.target.value)}/>
                <input type="date" onChange={(e)=>setDateFrom(e.target.value) }/>
                <input type="date" onChange={(e)=>setDateTo(e.target.value) }/>
                <button onClick={()=>getFlyTickets()}>Search</button>
            </div>
            <div>
                
            </div>
        </>
    )
}

export default FlyTickets;