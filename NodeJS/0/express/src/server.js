const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const vDir = path.join(__dirname + "/../v");
const dataJson = path.join(__dirname + "/../data/data.json");
const fs = require("fs");
const list = fs.readFileSync(dataJson, "utf-8");
const listData = JSON.parse(list);
const create = require("../services/create");
const read = require("../services/read");

app.use("/signin", express.static(vDir + "/signin"));
app.use("/signup", express.static(vDir + "/signup"));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hi");
});
app.get("/signup", (req, res) => {
  console.log("Hi Login");
  res.sendFile(vDir + "/signup/signup.html");
});
app.get("/signin", (req, res) => {
  res.sendFile(vDir + "/signin/signin.html");
});
app.post("/api/signin", (req, res) => {
  const data = req.body;
  const x=read(data);
res.send(JSON.stringify(x));
});
app.post("/api/signup", (req, res) => {
  const data2 = req.body;
  create(data2);
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
var jwt = require('jsonwebtoken');
// var token = jwt.sign(listData[0], 'yahala');
// console.log("🚀 ~ file: server.js ~ line 41 ~ token", token)

// app.delete('/api/delete/:x',(req, res)=>{
//   const id= req.params.x;
//   if (listData[0].role=="admin") {
//     listData[0]=""
//     console.log("user deleted")
//   }else console.log("delete failed")
//   res.end()
//   return
// })