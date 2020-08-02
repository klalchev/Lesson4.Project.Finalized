var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
// const cors = require("cors");
const mockAPIResponse = require('./mockAPI.js')

projectData = {};

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

// designates what port the app will listen to for incoming requests
app.listen(4040, function () {
    console.log('Example app listening on port 4040!')
})

// Fetch Aylien API
/*
document.getElementById('submit').addEventListener('click', performAction);

function performAction(e){
    // Select the actual value of an HTML input to include in POST
    const linkEntry = document.getElementById('link').value;

    getAlyien(linkEntry)
    .then(function(data){   // the variable data declared in getWeatherDemo function. These are chained promises

        console.log(data);
        postData('/addSentimentAnalysis', {opinion: data.polarity, bias: data.subjectivity, text: data.data.text, opinionConfidence: data.polarity_confidence, biasConfidence: data.subjectivity_confidence} ) //HOW TO ACCESS AN OBJECT WITHIN AN ARRAY WITHIN AN OBJECT: description: data.weather[2].description https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json

    // We can do this because of Async!
    updateUI()
})

}
*/
/* POST Example
const postData = async ( url = '', data = {})=>{
    //console.log(data);
    const response = await fetch(url, { // url indicates where we want to post the data to;
    method: 'POST', //*GET, POST, PUT, DELETE - we could get data, post data, put or delete data
    credentials: 'same-origin', //include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content- Type ". Here we attach our data to the body of our POST request
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
    console.log("error", error);
    //appropriately handle the error
    }
}

const getAlyien = async (getLink)=>{
    //1.
    const res = await fetch(textapi.sentiment({
        'url': getLink
    }, function(error, response) {
        if (error === null) {
            console.log(response);
        }
    }))

    //2. Call Fake API
    //const res = await fetch('/fakePictureData')
    try {

        const data = await res.json(); // res.json() is the data you fetch
        console.log(data)
        return data;
        // 1. We can do sth with our returned data here-- like chain promises

        // 2.
        // postData('/addAnimal', data)
    }   catch(error) {
        // appropriately handle the error
        console.log("error", error);
    }
}
*/
/* Update UI Demo
const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json();
        console.log(allData);

        document.getElementById('results1').innerHTML ='Opinion: ' + allData.opinion;
        document.getElementById('results2').innerHTML ='Bias: ' + allData.bias;
        document.getElementById('results3').innerHTML ='Text: ' + allData.text;
        document.getElementById('results4').innerHTML ='OpinionConfidence: ' + allData.opinionConfidence;
        document.getElementById('results5').innerHTML ='BiasConfidence: ' + allData.biasConfidence;
    }catch(error){
        console.log("error", error)
    }
}
*/

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
app.get('/all', getData) //In this case get sends the data to the app.js. Every GET request produces a request, which is the data provided by the GET request, and a response, which is the data returned to the GET request

function getData(req, res){
    res.send(projectData)
    console.log(projectData)
}