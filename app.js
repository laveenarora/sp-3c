
// const dotenv = require('dotenv');
// require('dotenv').config({path: "./.env"});
const express = require("express");
const ejs = require("ejs");
// const mysql = require("mysql2");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.static("public")); //if we remove initialisation of publicDirectory, then we can make it work by just writing 'public'
//if we just write public above, then we declaring css file, we need to remove '/'
app.set('view engine','ejs');
//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));
//Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());



//Define Routes
app.use('/', require('./routes/pages'));



app.listen(3000, function() {
    console.log("Server started on port 3000");
 });
  