function validate(myURL) {
    var pattern =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (pattern.test(myURL))
     {
        postData('http://localhost:4040/addSentimentAnalysis', {url:myURL})
        .then(res=>{updateUI(res)});
    }
    else
    {
      //document.getElementById('validate').innerHTML = 'not a valid url entry';
      alert("not a valid URL entry");
    }
}

const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
    console.log("error", error);
    }
}
const updateUI = async (allData) => {
    try{
        document.getElementById('results1').innerHTML ='Polarity: ' + allData.polarity;
        document.getElementById('results2').innerHTML ='Subjectivity: ' + allData.subjectivity;
        document.getElementById('results3').innerHTML ='Text: ' + allData.text;
        document.getElementById('results4').innerHTML ='Polarity_confidence: ' + allData.polarity_confidence;
        document.getElementById('results5').innerHTML ='Subjectivity_confidence: ' + allData.subjectivity_confidence;
    }catch(error){
        console.log("error", error)
    }

}

export { validate }