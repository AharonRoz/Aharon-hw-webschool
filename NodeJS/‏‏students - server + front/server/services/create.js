const fs = require("fs");

function create(x) {
  let idEx = "no";
  const studentsJson = __dirname + "/../data/students.json";
  const students = JSON.parse(fs.readFileSync(studentsJson, "utf-8"));
  if (students.length == 0) {
    students.push(x);
    fs.writeFileSync(
      __dirname + "/../data/students.json",
      JSON.stringify(students)
    );
    idEx = "yes";
    console.log("User added");
  } else
    for (let i = 0; i < students.length; i++) {
      if (JSON.parse(x.id) === JSON.parse(students[i].id)) {
        idEx = "yes";
        console.log("#ID already exists");
      }
    }
  if (idEx === "no") {
    students.push(x);
    fs.writeFileSync(
      __dirname + "/../data/students.json",
      JSON.stringify(students)
    );
    console.log("User added");
  } else idEx = "no";
}

module.exports = create;
