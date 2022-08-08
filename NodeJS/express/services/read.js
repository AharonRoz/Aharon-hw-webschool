const fs = require("fs");
const bcrypt = require("bcrypt");

async function read(x) {
  const dataJson = __dirname + "/../data/data.json";
  const data = JSON.parse(fs.readFileSync(dataJson, "utf-8"));
  let d = "No data found.";
  if (data.length == 0) {
return d;
  } else
    for (let i = 0; i < data.length; i++) {
      if (x.name === data[i].name) {
        const check = await bcrypt.compare(x.pass, data[i].pass);
        if (check == true) {
                  d = "yes"
        return (d);
        }else d = "no";
      } 
      return (d);
    }
}

module.exports = read;
