const axios = require("axios");
const city = process.argv[2];
const key = `ee6062b60ad21568dd7e24257d76cda5`
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`;


  axios
  .get(url)
  .then(res => {
    const weather = res.data.weather[0].main
    const kindOfWeather = res.data.weather[0].description;
    const temp =res.data.main.temp

    console.log(`In ${city},${res.data.sys.country}`)
    console.log(`Today there is ${weather}`)
    console.log(`It is ${kindOfWeather}`)
    console.log(`We have ${temp} degree`)
   
  }).catch(err =>{
      console.log(err)
  });


  async function asyncWeather(){
      try{
          const response = await axios.get(url);
          console.log(response);
      }catch (error){
          console.log(error)
      }
  }




