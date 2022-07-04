const fs = require("fs");

function create(x) {
  
  fs.writeFileSync("./new.txt", `${x}`, { flag: "a+" });
}

module.exports = create;