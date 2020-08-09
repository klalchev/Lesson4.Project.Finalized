var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
// const cors = require("cors");
const mockAPIResponse = require('./mockAPI.js')

// projectData = {};

const dotenv = require('dotenv');
dotenv.config();

const app = express()
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))
var aylien = require("aylien_textapi");

var textapi = new aylien({
application_id: process.env.API_ID,
application_key: process.env.API_KEY
});


//app.use(express.static('src/client'))
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile('client/views/index.html', {root: __dirname + '/..'})
    // res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// POST Route
app.post('/addSentimentAnalysis', addAnalysis); //post data from app.js to server.js

function addAnalysis(req, res){ //each route (post or get) callback function has a request (in this case req) and respond (res) parameters. Request requests/accesses data from the app. Respond sends data to the app
    textapi.sentiment({
        'url': req.body.url
    }, function(error, response) {
        res.send(response)
    })
}

//Get Route
/*
app.get('/all', getData) //In this case get sends the data to the app.js. Every GET request produces a request, which is the data provided by the GET request, and a response, which is the data returned to the GET request

function getData(req, res){
    res.send(projectData)
    console.log(projectData)
}
*/
// export {addAnalysis}