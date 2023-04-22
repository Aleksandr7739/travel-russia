const cors = require('cors');
const express = require('express')
var bodyParser = require('body-parser')
const pg = require('pg')
const app = express()

app.use(cors({
    origin: '*'
}))

const config = {
    user: 'postgres',
    database: 'travel-database',
    password: 'postgres',
    port: 5432
};

const pool = new pg.Pool(config);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/travel-city', function (req, res) {
    console.log("Запрос получен");

    pool.connect(function (err, client, done) {
        console.log('Проверка бэка номер 1')
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query('SELECT * FROM city order by id', function (err, result) {
            done();
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            // console.log(result.rows)
            console.log('Проверка бэка номер 2')
            return res.status(200).json({ response: result.rows });
        })
    })
    // res.json(resultCitys)
})

app.listen(5000, console.log("Server work"))