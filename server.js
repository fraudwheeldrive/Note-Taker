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

//notes by ID
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id ===id ) [0];
    return result;
}


//create notes 
function createNewNote (body, noteArray) {
    console.log(body);
   
    //return finished ccode to post route for response
    return body;
}

// get route 
app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

//specific note
app.get('/api/notes/:id', (req, res) => {
    const results = findById (req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
    
});

//post route add ID's

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    res.json(req.body);
   
});

// Listener 
app.listen(PORT, () => {
    console.log (`API server now on port ${PORT}`);
});