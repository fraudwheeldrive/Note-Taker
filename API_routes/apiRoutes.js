// packages 
const fs = require("fs");
const { notes } = require('../db/db.json');
const router = require ('express').Router();
const { v4: uuidv4 } = require('uuid');
uuidv4();


function createNewNote(body, notes) {
    const noteInput = body;

    //noteInput.id =uuidv4();

    notes.push(noteInput);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return noteInput;
    }


//get saved notes 
router.get('/notes', (req, res) => {
    return res.json(notes);
});
 


router.post('/notes', (req, res) => {
    req.body.id = uuidv4();

       let notes =createNewNote(req.body, data);
    res.json(data);
   
});


module.exports = router;
