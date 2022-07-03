const fs = require("fs");


function create(x) {
  fs.writeFileSync("./new",JSON.stringify(process.argv.slice(2)), `a+`);

}

module.exports = create;