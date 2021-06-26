const { query } = require("express");
const express = require("express");
const db = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;
const uri = process.env.URI_DB;
db.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const dbconnect = db.connection;
dbconnect.once("open",()=>{
        console.log("Database Is Connected");
});

app.get("/", (req, res) => {
  res.sendFile("./view/index.html", { root: __dirname });
});
app.get("/profile/:name", (req, res) => {
  res.send(
    "Profile Testing : " + req.params.name + " name : " + req.query.nama
  );
});
app.get("/article", (req, res) => {
  res.send("Article Testing");
});
app.use("/", (req, res) => {
  res.status(404);
  res.send("Menu Utama Tidak ada!");
});

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is Running on port : ${port}`);
});
