// packages 
const express = require('express');
const path = require('path');

const apiRoutes = require('./API_routes/apiRoutes');
const htmlRoutes = require('./API_routes/htmlRoutes');

//instantiate the server
const app = express()

//api route 
app.use('/api', apiRoutes);

// html route 
app.use('/', htmlRoutes);

//middleware 
app.use(express.urlencoded({ extended: true }));
//parse incoming data as json 
app.use(express.json());
// add css and js from public 
app.use(express.static('public'));

// port 
//port
const PORT = process.env.PORT || 3001;

// Listener 
app.listen(PORT, () => {
    console.log (`API server now on port ${PORT}`);
});