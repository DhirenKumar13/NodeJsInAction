const yargs = require('yargs');
const axios = require('axios');

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

var addressToSearch = encodeURIComponent(argv.address);
var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressToSearch}`;

axios.get(geoCodeUrl).then( (response) => {

    let apiKey = '9b728abe5f01bc45bd6318954d7acc19';
    let latitude = response.data.results[0].geometry.location.lat;
    let longitude = response.data.results[0].geometry.location.lng;

    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Address You are looking for is not available');
    }

    var weatherUrl = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`;
    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature ;
    var apparentTemperature = response.data.currently.apparentTemperature ;
    console.log(`It's currently ${temperature} and feels like ${apparentTemperature}`)
}).catch( (error) => {
    if(error.code === 'ENOTFOUND'){
        console.log('Unable to connect to API...');
    }
    console.log(error.message);
});

console.log('Retrieving details please wait .... ');
