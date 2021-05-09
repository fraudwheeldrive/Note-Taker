const express = require('express');
const fs = require('fs');
const path = require('path');

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
// add css and js from public 
app.use(express.static('public'));

// on launch need to get Notes HTML, Load saved notes, listen

//notes by ID
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id ) [0];
    return result;
}

//create notes 
function createNewNote (body, notesArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync ( 
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
        );
  
    //return finished ccode to post route for response
    return note;
}

//function validatenote(note) {
//}

//get route 
app.get('/api/notes', (req, res) => {
    let results = notes;
    if (results) {
   res.json(results);
   } else {}
   res.send(404);
});

//return note by id 
app.get('/api/notes/:id', (req, res) => {
    const results = findById (req.params.id, notes);
    if (results) {
        res.json(results);
    } else {
        res.send(404);
    }
    
});

//post route add ID's

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

   // add note
       const notes =createNewNote(req.body, notes);

    res.json(animal);
   
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// Listener 
app.listen(PORT, () => {
    console.log (`API server now on port ${PORT}`);
});