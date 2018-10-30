// const fs = require('fs');
// let routesTests = fs.readdirSync(__dirname + '/test');
// let randomNumber = math.rand();

const app = require('../index');
const TEST_PORT = 4000;
const startApp = () => app.listen(TEST_PORT);
const tearDown = () => app.listen().close();

// Require the abcTest.js test and pass it the randomNumber
// require('./test/abcSpec.js')(randomNumber);


startApp();
run();
tearDown();