const request = require('request');
var geocodeAddress = (address, callback) => {
    let addressToSearch = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressToSearch}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to the Google Server');
        } else if (body.status === "ZERO_RESULTS") {
            callback('Address Not Available ...');
        } else {
            callback(undefined, {
                address: body.results[0].formatted_address,
                longitude: body.results[0].geometry.location.lng,
                latitude: body.results[0].geometry.location.lat
            });
        }
    });
};

module.exports = {
    geocodeAddress
}

