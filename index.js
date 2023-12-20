const express = require('express');
const connect = require('./config/db');
const router = require('./routs/user.rout');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.set("viwes", __dirname + "/views")
app.use(router)

app.listen(8080,()=>{
    connect();
    console.log("listening on port 8080");
})