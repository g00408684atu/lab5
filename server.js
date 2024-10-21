const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of an Express application
const port = 4000; // Define the port on server

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error
    res.status(500).send('Something went wrong!'); // Send a 500 error message
});

// Route for the root URL that sends a message
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

// Route that takes 'name' and 'surname' as URL parameters
app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name; // Extract the 'name' parameter from  request
    const surname = req.params.surname; // Extract the 'surname' from request
    res.send(`Hello ${name} ${surname}`); // Send a message with name and surname
});



// Route to get a list of movies in JSON format
app.get('/api/movies', (req, res) => {
    const movies = [ // Create an array of movie items
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.json({ whatever: movies }); // Send the movies array as JSON response
});

// Route to serve an HTML file named 'index.html'
app.get('/index', (req, res) => {
    res.sendFile(__dirname + "/index.html"); // Send the HTML file located in the current directory and showing index.html
});

// Define a POST route at the '/name' endpoint
app.post('/name', (req,res)=>{
    res.send("goodbye "+req.body.firstname+ " " +req.body.lastname)// Sent response to the client with the first and last name received from the request body
});

// Route to respond with a greeting using query parameters 'firstname' and 'lastname'
app.get('/name', (req, res) => {
    res.send('hello ' + req.query.firstname + " " + req.query.lastname); // Construct and send the greeting of hello then the name entered and surname entered
});

// Start up of the server and on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log a message indicating the server is running
});
