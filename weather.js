const axios = require("axios");
const city = process.argv[2];
const key = `ee6062b60ad21568dd7e24257d76cda5`
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`;


  axios
  .get(url)
  .then(res => {
    const output = res.data.weather
    console.log(output)
  }).catch(err =>{
      console.log(err)
  })



