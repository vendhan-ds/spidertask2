const express = require('express')
const bodyParser=require("body-parser")
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{res.sendFile(__dirname+"/pages/mainpage.html")})

app.get("/",(req,res)=>{res.sendFile(__dirname+"/pages/login.html")})






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));