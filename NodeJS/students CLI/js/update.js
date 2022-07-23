const fs = require("fs");
const read = require("./read");
const args = process.argv.slice(2);
const student = args[1] ? JSON.parse(args[1]) : "0";

function create2() {
  const students = read();
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === student.id) {
      students[i].name = student.name;
      students[i].avg = student.avg;
      fs.writeFileSync(__dirname + "/students.json", JSON.stringify(students));
      break;
    }
  }
}

module.exports = create2;
