const express = require('express');
const app = express();
const port = 3000;

//Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//routes
const studentRoute = require('./routes/studentRoute');
app.use('/student', studentRoute);

const gradeRoute = require('./routes/gradeRoute');
app.use('/grade', gradeRoute);




app.listen(port, () => console.log(`Example app listening on port ${port}!`));






//Connect to DB
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mikejbrown:ssOX5PclZpKgf2VE@cluster0.dk5ltnv.mongodb.net/test', {useNewUrlParser: true})
    .then(() => console.log('connection successfull'))
    .catch((error) => console.error(err));