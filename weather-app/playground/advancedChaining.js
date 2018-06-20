var addAsync = ( num1 , num2 ) => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            if(typeof num1 === 'number' && typeof num2 === 'number') {
                resolve( num1 + num2 );
            } else {
                reject( 'OOOPSSS !!! You Fool !! I Cannot add these two' );
            }
        },2000);
    });
};

addAsync(2,3).then((addition) => {
    console.log('ADDITION is : ',addition);
    return addAsync(addition , 100);
}).then((afterAddition) => {
    console.log('ADDITION after 100 total is : ',afterAddition);
}).catch((error) => {
    console.log("ERROR ",error);
});

addAsync(2,'a').then((addition) => {
    console.log('ADDITION is : ',addition);
    return addAsync(addition , 100);
}).then((afterAddition) => {
    console.log('ADDITION after 100 total is : ',afterAddition);
}).catch((error) => {
    console.log("ERROR ",error);
});


// ADDITION is :  5
// ERROR  OOOPSSS !!! You Fool !! I Cannot add these two
// ADDITION after 100 total is :  105