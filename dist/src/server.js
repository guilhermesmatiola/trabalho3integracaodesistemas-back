import app from './app.js';
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Server is up and running on port ".concat(port));
});
