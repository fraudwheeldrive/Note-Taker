const fs =require("fs");
const path = require("path");
const { notes } = require('../db/db.json');
const router = require ('express').Router();

//get route 
router.get('/api/notes', (req, res) => {
    let results = notes;
    if (results) {
   res.json(results);
   } else {}
   res.send(404);
});

//return note by id 
router.get('/api/notes/:id', (req, res) => {
    const results = findById (req.params.id, notes);
    if (results) {
        res.json(results);
    } else {
        res.send(404);
    }
    
});

//post route add ID's

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

   // add note
       const notes =createNewNote(req.body, notes);

    res.json(animal);
   
});

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

router.get('*', (req, res) => {
    console.log('click');
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;
