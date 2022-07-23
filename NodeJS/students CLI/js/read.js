const fs = require("fs");
const studentsJson = __dirname + "/students.json";

function read() {
  const students = fs.readFileSync(studentsJson, "utf-8");
  const studentsParse=JSON.parse(students);
  return studentsParse;
}

module.exports = read;
