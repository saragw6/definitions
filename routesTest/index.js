const app = require('../index')
const TEST_PORT = 4000;
const startApp = () => app.listen(TEST_PORT, () => {
    console.log(`Tests running on port ${TEST_PORT}`);
});
const tearDown = () => app.listen().close();

startApp();
require('./authorTest')();
require('./reportedTest')();
tearDown();
