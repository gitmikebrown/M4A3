const express = require('express');
const app = express();

//ENV
require('dotenv').config({ path: './config.env' });




//Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());


//const app = require('./app');  I could not get this to work
const loanRoute = require('./routes/loanRoute');
app.use('/loan', loanRoute);



//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));



//Connect to DB
const mongoose = require('mongoose');
const MONGO_DATA_BASE = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);
mongoose.connect(MONGO_DATA_BASE, {useNewUrlParser: true})
    .then(() => console.log('connection successfull\n**********************************'))
    .catch((error) => console.error(err));