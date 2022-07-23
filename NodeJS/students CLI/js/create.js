const read=require("./read")

function create(x) {
  const students=read();
  students.push(x)
}

module.exports = create;

