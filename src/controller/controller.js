const API_KEY = '1728f1dab4a9e7926e8ec67bb84b363f'
const axios = require('axios')
const Weather = require('../model/weather')



exports.renderhomepage = (req,res)=>{
    res.render('index');
}



exports.getweather = (req,res)=>{
    const city = req.body.city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    const weather = new Weather(req.body.city)
    weather.validateuserinput()

    if (weather.error.length){
        res.render('index',{
            error : weather.error.toString()
        })
    }
    else{
    axios.get(url).then((response) =>{
        res.render('index',{
            weather : `It is ${response.data.main.temp} Degree Celcius temperature in ${response.data.name}`
        })
    }).catch((error)=>{
        console.log(error)
    })
}
    
}

exports.renderaboutpage = (req,res)=>{
    res.render('about');
}