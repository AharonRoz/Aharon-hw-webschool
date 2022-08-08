const fs = require("fs");

function read(x) {
  const dataJson = __dirname + "/../data/data.json";
  const data = JSON.parse(fs.readFileSync(dataJson, "utf-8"));
  let d = "No data found.";
  if (data.length == 0) {
    return d;
  } else
    for (let i = 0; i < data.length; i++) {
      if (x.name === data[i].name && x.pass === data[i].pass) {
        d = "yes"
        return (d);
      } else d = "no";
      return (d);
    }
}

module.exports = read;
