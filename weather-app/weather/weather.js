const request = require('request');

// 9b728abe5f01bc45bd6318954d7acc19 = API KEY

// https://api.darksky.net/forecast/9b728abe5f01bc45bd6318954d7acc19/12.8367348,77.65990029999999 = URL

var getWeather = (latitude , longitude , callback) => {
    let apiKey = '9b728abe5f01bc45bd6318954d7acc19';
    request({
        url : `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`,
        json : true
    },(error , response , body) => {
        if ( !error && response.statusCode === 200) {
            callback(undefined , {
                temperature : body.currently.temperature ,
                apparentTemperature : body.currently.apparentTemperature
            });
        } else {
            console.log("Unable to fetch weather ..");
            callback("Unable to fetch weather ..");
        }
    });
};

module.exports = {
    getWeather
};