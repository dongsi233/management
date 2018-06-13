const express = require('express')
let app = express()
const routeData = require('./routeData')
app.get('/', (req, res) => {
    debugger;
    res.header("Access-Control-Allow-Origin", "*")
    let data = {}
    //if(req.query.userName) {
        data = routeData
    //}
    res.send(data)
})

app.listen(8000)

console.log("server listen at 8000")