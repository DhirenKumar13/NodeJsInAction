var consoleOutput = ((mongoOperation) => {
    console.log(`=================================================`);
    console.log(`               MONGO OPERATIONS                  `);
    console.log(`===============${mongoOperation}=================`);
    console.log(`=================================================`);
});

module.exports = {
    consoleOutput
};