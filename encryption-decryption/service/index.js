module.exports = function () {
    return {
        greetMorning : (user) => {
            return 'Good Morning '+user;
        },
        greetNight : (user) => {
            return 'Good Night '+user;
        }
    }
}