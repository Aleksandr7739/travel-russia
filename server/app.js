const cors = require("cors");
const express = require("express");
var bodyParser = require("body-parser");
const pg = require("pg");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const config = {
  user: "postgres",
  database: "travel-database",
  password: "Gr345tem",
  port: 5432,
};

const pool = new pg.Pool(config);

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/travel-city", function (req, res) {
  console.log("Запрос получен");

  pool.connect(function (err, client, done) {
    console.log("Проверка бэка номер 1");
    if (err) {
      console.log("Can not connect to the DB" + err);
    }
    client.query("SELECT * FROM city order by id", function (err, result) {
      done();
      if (err) {
        console.log(err);
        return res.status(400).send(err);
      }
      // console.log(result.rows)
      console.log("Проверка бэка номер 2");
      return res.status(200).json({ response: result.rows });
    });
  });
  // res.json(resultCitys)
});

app.post("/get-fly-tickets", function (req, res) {
  console.log(req.body);
  const objHeaders = {
    authority: "api.travelpayouts.com",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en-GB;q=0.7,en;q=0.6",
    "cache-control": "max-age=0",
    cookie:
      "tp_referrer=aviasales.ru/; ad_source=support_ru; _gid=GA1.2.414579068.1684133336; _ym_uid=1684133337635751030; _ym_d=1684133337; _hjSessionUser_302666=eyJpZCI6IjU5NTgwZjZmLWYyMmMtNTgyYS1iYmQwLWE0MzM4NzFhNDc0NiIsImNyZWF0ZWQiOjE2ODQxMzMzMzczNzQsImV4aXN0aW5nIjp0cnVlfQ==; locale=ru; app_referer=https://support.travelpayouts.com/; regpage=mainpage; uxs_uid=c006ace0-f2ec-11ed-ab2f-7df329ec69fe; promotion_code=; marker=direct; partners_marker=442319; know_about_closed=1; app_remember_token=06568048cd511d4997d28b1bbad94d1d; _ga_XC952XPR7M=GS1.1.1684133414.1.1.1684134207.0.0.0; onboarding_closed_step=TOOLS; refresh_token=wMG9cd3DU1UGIMhpr-VNUEgLvE_blvjYoI8kHLzGD67CWh4Kpg5aOA; ad_content=articles+203956163; _iidt=XSnK2buiCTK4vE8Ve949bFyToM2SjpdmCayjYcqTH1KbOAxxH8jv0aANmJ0fTwS1Y+78DSHb916jnunnvQfl/I2akg==; _vid_t=qoxCA4ftFhzEGxaTIGv6sp80f2cL4DAFqUzzuXSlZvg+/r3/yCulrSShxaTJVspvx11qS6VXFz+Yl6e5UFpa4T8aRw==; _sp_ses.2042=*; access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InI2Ukl1WEdiV1o0b2o5VmxMNWNEVDRhLW1TZyJ9.eyJhdWQiOiJiMGUwMmZjYy0wYWI0LTRiMmMtYTE2NC03NDI3NjI3ODNhNGUiLCJleHAiOjE2ODQzOTI1MjQsImlhdCI6MTY4NDM5MTYyNCwiaXNzIjoidHJhdmVscGF5b3V0cy5jb20iLCJzdWIiOiIxMTFhNTE3Zi0yODk5LTQxOWMtYmU4NC05OWI4NDUxZjcxNTAiLCJqdGkiOiJjNzNjNzYzMi1kN2E5LTRjYjAtYjdmMS04NGJmZWFjOGM4YzMiLCJhdXRoZW50aWNhdGlvblR5cGUiOiJSRUZSRVNIX1RPS0VOIiwiZW1haWwiOiJrb2huZXY4NEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6ImtvaG5ldjg0QGdtYWlsLmNvbSIsInJvbGVzIjpbIlBBUlRORVIiXSwiYXBwbGljYXRpb25JZCI6ImIwZTAyZmNjLTBhYjQtNGIyYy1hMTY0LTc0Mjc2Mjc4M2E0ZSJ9.f89cqAQm6t7aaKX997nhfQh9O2u6wZEYv-vJWe487hQKqjvahno5b7acQR0zRLhDuXXGL6A_sxzXxae31SGkp1lBftcI0lElpnJgqibpLvQnAHQXYcC_YUwIdphfiNO7kNSLJ8Py5vlEPPrzGaRxQyLnqK8IimsPLHW1AOQoYAGrbARaBlSBFe5TS_I9fG7VFq2bCrUmzine-HvufEXqyfb4zyj-aKIB_hIQ_jFAZGVNR61A90ZcDdhfK3PI65jcTGdtPVdaUijrb7AW7cdTQHIrnYIUb_Q3rI54ey_nFIjSxv0pysRAAwfh6o9UIdxRGsqwOVsibJxAmevYzrNoAg; _ym_isad=2; _ym_visorc=w; _hjSession_302666=eyJpZCI6ImM1N2RmNGY1LTEyNWQtNDAwYy05MmViLWM4MzcwY2Q5ZjM2NyIsImNyZWF0ZWQiOjE2ODQzOTE2NDY5MjcsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; _ga_1WLL0NEBEH=GS1.1.1684391644.4.1.1684391678.26.0.0; app_locale=ru; tp_session=true; _sp_id.2042=e1b50c79-6264-461d-b3e1-eef7ecb23efc.1684133336.4.1684391683.1684306606.d980447c-f29d-4251-8079-4bb5a3937b61; _ga=GA1.1.1465209428.1684133336; _ga_Y3REWYRN9K=GS1.1.1684391626.5.1.1684391682.0.0.0",
    "sec-ch-ua":
      '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
  };
  var myHeaders = new Headers();
  for (let key in objHeaders) {
    myHeaders.append(key, objHeaders[key]);
  }
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  fetch(
    `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${cityFrom}&destination=${cityTo}&departure_at=${dateFrom}&return_at=${dateTo}&unique=false&sorting=price&direct=false&cy=rub&limit=30&page=1&one_way=true&token=40fd58e43a1636e15bf02e3a2f041403`,
    requestOptions
  )
    .then((res) => res.json())
    .then((res) => console.log(res));
  res.end();
});

app.listen(5000, console.log("Server work"));
