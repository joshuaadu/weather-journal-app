/* Global Variables */
const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=';
const apiKey = '0dd155a7a3dc0776430b8a32c3025eab';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// GET Project Data
const getProjectData = async (url='/all') => {
    const request = await fetch(url);
    try {
        const data = await request.json();
        console.log(data);
    }catch(error){
        console.log('error', error)
    }
};

// Post data to project data
const postData = async (url, data={}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    try {
        const postMessage = await response.json();
        console.log(postMessage);
    } catch (error) {
        console.log('error', error);
    }
}

// GET Weather data from OpenWeather
const getWeatherdata = async (url='') => {
    const request = await fetch(url);
    try {
        const weatherData = await request.json();
        console.log(weatherData);
        return weatherData;
    }catch (error) {
        console.log('error:', error);
    }
}

getProjectData();
getWeatherdata(baseUrl + apiKey)
.then((data) => {
    postData('/postData', data);
});

