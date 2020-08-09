export const getMockAPI = async (url='')=>{
    //1.
    const res = await fetch(url) //using units=metric to convert from kelvin to celcius: For temperature in Fahrenheit use units=imperial, For temperature in Celsius use units=metric
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

//could also use supertest- https://zellwk.com/blog/endpoint-testing/