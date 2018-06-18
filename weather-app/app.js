const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
                .options({
                    address : {
                        demand : true,
                        alias : 'a',
                        describe : 'Address to fetch the weather ... ',
                        string : true
                    }
                })
                .help()
                .alias('help','h')
                .argv;
geocode.geocodeAddress(argv.address , (errorMessage , result) => {
    if(errorMessage) {
        console.log("Error occured as : ",errorMessage);
    } else {
        // console.log(JSON.stringify(result , undefined , 2));
        console.log(`ADDRESS : ${result.address}`);
        weather.getWeather(result.latitude , result.longitude , (errorMessage , resultWeather) => {
            if(errorMessage) {
                console.log("Error occured as : ",errorMessage);
            } else {
                console.log("Temperature : ", JSON.stringify( resultWeather , undefined , 2));
                console.log(`It's currently ${resultWeather.temperature} and feels like ${resultWeather.apparentTemperature}`)
            }
        });
    }
});

console.log('Retrieving details please wait .... ');
