var getUser = (id ,callback) => {
    var user = {
        id : 1,
        name : "Dhiren"
    };
    setTimeout( () => {
        console.log('Waiting for the data .... ');
        callback(user);
    },3000);
};

getUser( 1 , (userReturned) => {
    console.log(userReturned);
});