const express = require('express');
var bodyParser = require("body-parser");
let app = express();
const routeData = require('./routeData');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.post('/', (req, res) => {
    debugger;
    let data = {}
    console.dir(req.body);
    //console.dir(req);
    
    // if(req.params.userName) {
        data = routeData
    // }
    res.send(data)
})

app.listen(8000)

console.log("server listen at 8000")