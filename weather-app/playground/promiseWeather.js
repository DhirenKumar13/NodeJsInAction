const request = require('request');

var requestPromise = (address) => {
    return new Promise( (resolve , reject) => {
        let addressToSearch = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressToSearch}`,
        json: true
    },(error , response , body) => {
        if (error) {
            reject('Unable to connect to the Google Server');
        } else if (body.status === "ZERO_RESULTS") {
            reject('Address Not Available ...');
        } else {
            resolve(
                {
                    address: body.results[0].formatted_address,
                    longitude: body.results[0].geometry.location.lng,
                    latitude: body.results[0].geometry.location.lat
                }
            )
        }
    });
    });

};

requestPromise(764001).then((address) => {
    console.log(JSON.stringify(address,undefined,2));
},(error) => {
    console.log('Error :',error);
});
