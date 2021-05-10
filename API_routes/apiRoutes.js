// packages 
const fs = require("fs");
const path = require("path");
const { notes } = require('../db/db.json');
const router = require ('express').Router();
const { v4: uuidv4 } = require('uuid');


function createNewNote(body, notes) {
    const noteInput = request.body;

    //noteInput.id =uuidv4();

    notes.push(noteInput);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes : noteInput }, null, 2)
    );
    return noteInput;
    }


//get saved notes 
router.get('/api/notes', (req, res) => {
    let results = notes;
    if (results) {
   res.json(results);
   } else {}
   res.send(404);
});


router.post('notes', (req, res) => {
    req.body.id = uuidv4();

    // validation to be added
   // add note
       const notes =createNewNote(req.body, notes);

    res.json(notes);
   
});

module.exports = router;
