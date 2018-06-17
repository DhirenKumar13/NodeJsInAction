const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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
    }else {
        console.log(JSON.stringify(result , undefined , 2));
    }
});
