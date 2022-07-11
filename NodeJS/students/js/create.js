const fs = require("fs");
const read=require("./read")

function create(x) {
  const students=read();
  students.push(x)
  fs.writeFileSync(__dirname + "/students.json", JSON.stringify(students))
}

module.exports = create;