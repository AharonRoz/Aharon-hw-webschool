const fs = require("fs");

function update(x) {
  let idEx = "no";
  const studentsJson = __dirname + "/../data/students.json";
  const students2 = JSON.parse(fs.readFileSync(studentsJson, "utf-8"));
  if (students2.length != 0) {
     for (var i = 0; i < students2.length; i++) {
      const students = JSON.parse(fs.readFileSync(studentsJson, "utf-8"));
      if (JSON.parse(x.id) === JSON.parse(students[i].id)) {
        students[i].name=x.name;
        students[i].avg=x.avg;
        fs.writeFileSync(
          __dirname + "/../data/students.json",
          JSON.stringify(students)
        );
        console.log(`ID ${x.id} updated to Name: ${x.name} and Average Grade: ${x.avg}`);
        break;
      }else if (i+1==students2.length) {
        console.log("#ID not found");
      }
    }  } else
  console.log("List is empty");
}

module.exports = update;
