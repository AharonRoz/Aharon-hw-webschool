const fs = require("fs");
const read = require("./read");
const args = process.argv.slice(2);
const student = args[1] ? JSON.parse(args[1]) : "0";

function deleteStu() {
  const students = read();
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === student.id) {
      console.log("Deleted student with ID ",student.id," and name ",student.name);
      students.splice(i, 1);
      fs.writeFileSync(__dirname + "/students.json", JSON.stringify(students));
      break;
    }
  }
}

module.exports = deleteStu;
