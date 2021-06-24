const express = require("express");
const app = express();

const port = "3000";

app.get("/",(req,res)=>{
      res.sendFile("./view/index.html",{root : __dirname});
});

app.get("/profile",(req,res)=>{

    res.send("Profile Testing");
});

app.get("/article",(req,res)=>{
  res.send("Article Testing");
});

app.use("/",(req,res)=>{
    res.status(404)
    res.send("Menu Utama Tidak ada!");
});

app.listen(port,()=>{
    console.log("Success!");
});