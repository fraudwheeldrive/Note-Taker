const express = require('express');
//notes route
const { notes } = require ('./notes.html');

//instantiate the server
const app = express()

app.get('/api/notes', (req,res)=> {
    res.send('hello');
});

app.listen(3001, () => {
    console.log (`API server now on port 3001!`);
});