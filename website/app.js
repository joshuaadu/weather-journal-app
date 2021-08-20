/* Global Variables */
/** OpenWeather base urls
 * Forecast data:
 *     api.openweathermap.org/data/2.5/forecast?
 * Current weather data: https://openweathermap.org/current
 *     api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
 *     api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 *     api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
 *     api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
 */
//  for forecast data
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '&appid=0dd155a7a3dc0776430b8a32c3025eab';


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

/* UI Variables */
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', () => {
    
    const zip = document.getElementById('zip').value;
    let param = '';

    (Number(zip))? param = 'id=' : param = 'q=';

    // Promises Chaining to get weather data
    getWeatherdata(baseUrl + param + zip + apiKey)
    // Then POST weather data to server
    .then((data) => {
        postData('/postData', data);
    })
    // Then GET project data from server
    .then(getProjectData());
})



