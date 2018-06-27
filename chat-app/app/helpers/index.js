'Use strict';
const router = require('express').Router();

// iterate through the routes object and mount it with router middleware
let _registerRouts = (routes, method) => {
    for(let key in routes) {
        if(typeof routes[key] === 'object' &&
                routes[key] !== null && !( routes[key] instanceof Array) ) {
                    _registerRouts(routes[key],key);
        } else {
            if(method === 'get') {
                router.get(key, routes[key]);
            } else if (method === 'post') {
                router.post(key, routes[key]);
            } else {
                router.use(routes[key]);
            }
        }
    }
};

let route = (routes) => {
    _registerRouts(routes);
    return router;
};

module.exports = {
    route
};