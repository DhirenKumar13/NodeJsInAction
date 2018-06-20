var myPromise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Hey It's not working ..");
    },1000);
});

myPromise1.then((result) => {
    console.log(result);
} , (errorMessage) => {
    console.log(errorMessage);
});

var myPromise2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Hey !!! It worked ..");
    },500);

});

myPromise2.then((result) => {
    console.log(result);
} , (errorMessage) => {
    console.log(errorMessage);
});