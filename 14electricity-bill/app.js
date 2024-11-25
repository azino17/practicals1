// app.js
const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files like CSS and JS
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// Route to render the main page
app.get('/', (req, res) => {
    res.render('index');
});

// Route to calculate the electricity bill
app.post('/calculate', (req, res) => {
    let units = parseInt(req.body.units);
    let billAmount = 0;

    // Calculate the electricity bill based on the units
    if (units <= 50) {
        billAmount = units * 3.5;
    } else if (units <= 150) {
        billAmount = 50 * 3.5 + (units - 50) * 4;
    } else if (units <= 250) {
        billAmount = 50 * 3.5 + 100 * 4 + (units - 150) * 5.2;
    } else {
        billAmount = 50 * 3.5 + 100 * 4 + 100 * 5.2 + (units - 250) * 6.5;
    }

    // Render the result page with the calculated bill amount
    res.render('index', { billAmount: billAmount, units: units });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
