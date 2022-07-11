const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  const command = req.url;
  return command;
});
const create = require("./create");
const deleteStu = require("./delete");
const read = require("./read");
const update = require("./update");
const args = process.argv.slice(2);
const student = args[1] ? JSON.parse(args[1]) : "0";

switch (command) {
  case "/read":
    const students = read();
    console.log(students);
    break;
  case "/create":
    const students1 = read();
    if (students1.find((o) => o.id === student.id)) {
      console.log("ID Error");
    } else create(student);
    break;
  case "/delete":
    const students2 = read();
    if (students2.find((o) => o.id === student.id)) {
      deleteStu();
    } else console.log("ID Error");
    break;
  case "/update":
    update();
    break;
  default:
    console.log("Please use Read, Update, Delete, or Create commands");
    break;
}
