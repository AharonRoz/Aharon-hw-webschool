const fs = require("fs");

function read() {
  const items = fs.readFileSync("./new.txt", "utf-8");
  console.log("items", items);
}

module.exports = read;
