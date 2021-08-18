/* Global Variables */

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
postData('/postData', {3: 'Another data posted to project data'});
getProjectData();

