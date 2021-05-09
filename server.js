const express = require('express');
const fs = require('fs');
// api route 
const { notes } = require ('./db/db.json');
//port
const PORT = process.env.PORT || 3001;
//instantiate the server
const app = express()

//middleware 
app.use(express.urlencoded({ extended: true }));
//parse incoming data as json 
app.use(express.json());

// on launch need to get Notes HTML, Load saved notes, listen

//filter notes 

//create notes 
function createNewNote (body, noteArray) {
    console.log(body);
    
    return body;
}

// get route 
app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

//post route

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

// Listener 
app.listen(PORT, () => {
    console.log (`API server now on port ${PORT}`);
});