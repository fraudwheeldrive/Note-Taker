// packages 
const express = require('express');
const path = require('path');

const apiRoutes = require('./API_routes/apiRoutes');
const htmlRoutes = require('./API_routes/htmlRoutes');
//const IndexRoutes =require('./API_routes/index')

//instantiate the server
const app = express()

// add css and js from public 
app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));


//api route 
app.use('/api', apiRoutes);

// html route 
app.use('/', htmlRoutes);

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//port
const PORT = process.env.PORT || 3001;

// Listener 
app.listen(PORT, () => {
    console.log (`API server now on port ${PORT}`);
});