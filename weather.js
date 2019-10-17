const axios = require("axios");
const city = process.argv[2];
const key = `ee6062b60ad21568dd7e24257d76cda5`
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`;

// axios.get(url)
//     .then(res=>{
//         const forecast = res.data.list
//         console.log(forecast)
//     }).catch(err=>{
//         console.log(err)
//     })











//   axios
//   .get(url)
//   .then(res => {
//     const weather = res.data.weather[0].main
//     const kindOfWeather = res.data.weather[0].description;
//     const temp =res.data.main.temp

//     // console.log(`In ${city},${res.data.sys.country}`)
//     // console.log(`Today there is ${weather}`)
//     // console.log(`It is ${kindOfWeather}`)
//     // console.log(`We have ${Math.floor(temp)} degree`)
                                                                                        
//   }).catch(err =>{
//       console.log("The country or city does not exist.")
//   });


  async function asyncWeather(){
      try{
          const response = await axios.get(url);
          console.log(response.data.weather[0].main);
          console.log(response.data.weather[0].description);
          console.log(Math.floor(response.data.main.temp));
        
      }catch (error){
          console.log(error)
      }
  }
  asyncWeather()




