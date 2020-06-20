let express = require('express');
let app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
res.send('Hello World');
});
app.listen(3003, function () {
console.log('Listening on port 3003');
});