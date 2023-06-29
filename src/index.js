const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router/route');

// connect to express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// MongoDB connection 
mongoose.connect('mongodb+srv://tshivendra07:6sWDbb2xoYJ5IZ0N@cluster0.3dhywqg.mongodb.net/urlShortner?retryWrites=true&w=majority', 
{useNewUrlParser: true})
.then(()=>{console.log('connected to Database');})
.catch((err)=>{console.log(err.message)})

// call router
app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port,()=>{console.log(`App is running on port http://localhost:${port}`)});