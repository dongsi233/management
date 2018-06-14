const express = require('express')
let app = express()
const routeData = require('./routeData')

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});


app.get('/', (req, res) => {
    debugger;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    let data = {}
    //if(req.query.userName) {
        data = routeData
    //}
    res.send(data)
})

app.listen(8000)

console.log("server listen at 8000")