const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/travel-city', function (req, res) {
    console.log("Запрос получен");
    // Загрузка списка городов из базы
    let resultCitys = [
        {
            nameCity: "Москва"
        },
        {
            nameCity: "Питер"
        },
        {
            nameCity: "Сочи"
        }
    ]
    res.json(resultCitys)
})

app.listen(5000, console.log("Server work"))