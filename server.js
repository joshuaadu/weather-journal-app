// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


/** Setup Server */ 
// Assign server port
const port = 8082;

// Start server
const server = app.listen(port, (req, res) => {
    console.log('Server running on localhost:', port);
})

// GET route for project data
app.get('/all', (req, res) => {
    projectData[1] = 'first data in project data file';
    res.send(projectData);
})

// POST route to add incoming data to projectData
app.post('/postData', (req, res) => {
    Object.assign(projectData, req.body);
    res.send(projectData);
})