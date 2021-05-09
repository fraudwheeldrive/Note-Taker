// packages 
const fs = require("fs");
const path = require("path");
const { notes } = require('../db/db.json');
const uuid = require ('uuid');
const router = require ('express').Router();

function createNewNote(body, notes) {
    const noteInput = body;
    notes.push(noteInput);
    fs.writeFileSync(
        path.joing(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
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
    req.body.id = uuid.v4();

   // add note
       const notes =createNewNote(req.body, notes);

    res.json(notes);
   
});

module.exports = router;
