const fs = require("fs");
const studentsJson = __dirname + "/../data/students.json";

let msg = "#ID not found";

function deleteFn(id) {
 const studentsParse = JSON.parse(fs.readFileSync(studentsJson, "utf-8"));
    if (studentsParse.length>0) {
        
    
  for (let i = 0; i < studentsParse.length; i++) {
    if (JSON.parse(id) === JSON.parse(studentsParse[i].id)) {
      console.log(
        "Deleted student with ID",
        studentsParse[i].id,
        "and name",
        studentsParse[i].name
      );
      studentsParse.splice(i, 1);
      msg = "yes";
      fs.writeFileSync(
        __dirname + "/../data/students.json",
        JSON.stringify(studentsParse)
      );
      break;
    }
    if (msg != "yes") {
     if (i<studentsParse.length) {
        console.log(msg);
     } 
    } else msg = "#ID not found";
  }}else console.log("Nothing to delete");
}

module.exports = deleteFn;
