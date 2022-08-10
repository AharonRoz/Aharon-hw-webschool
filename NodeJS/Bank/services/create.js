const fs = require("fs");
const bcrypt = require("bcrypt");

function create(x) {
  bcrypt.hash(x.pass, 10).then(function (hash) {
    x.pass = hash;
    let nameEx = "no";
    const dataJson = __dirname + "/../data/data.json";
    const data = JSON.parse(fs.readFileSync(dataJson, "utf-8"));
    if (data.length == 0) {
      data.push(x);
      fs.writeFileSync(__dirname + "/../data/data.json", JSON.stringify(data));
      nameEx = "yes";
      console.log("User added");
    } else
      for (let i = 0; i < data.length; i++) {
        if (x.name === data[i].name) {
          nameEx = "yes";
          console.log("#Name already exists");
        }
      }
    if (nameEx === "no") {
      data.push(x);
      fs.writeFileSync(__dirname + "/../data/data.json", JSON.stringify(data));
      console.log("User added");
    } else nameEx = "no";
  });
}

module.exports = create;
