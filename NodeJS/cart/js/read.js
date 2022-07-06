const fs = require("fs");
const newJson = __dirname + "/new.json";

function read() {
  const items = fs.readFileSync(newJson, "utf-8");
  const itemsParse=JSON.parse(items);
  return itemsParse;
}

module.exports = read;
