const express = require('express');
const fs = require('fs');
// api route 
const { notes } = require ('./db/db.json');
//port
const PORT = process.env.PORT || 3001;
//instantiate the server
const app = express()

// on launch need to get Notes HTML, Load saved notes, listen

app.get('/api/notes', (req, res) => {
    res.json(notes);
});


// Listener 
app.listen(PORT, () => {
    console.log (`API server now on port ${PORT}`);
});