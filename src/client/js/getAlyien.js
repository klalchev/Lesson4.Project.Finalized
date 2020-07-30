function getAylienAnalysis (event) {
    event.preventDefault()
        const linkEntry = document.getElementById('link').value;
        postData('/addSentimentAnalysis', {url:linkEntry})
        .then(res=>{updateUI(res)})
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
export {getAylienAnalysis}