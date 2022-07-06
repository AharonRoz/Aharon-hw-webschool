const fs = require("fs");
const read=require("./read")

function create(x) {
  const cart=read();
  cart.push(x)
  fs.writeFileSync(__dirname + "/new.json", JSON.stringify(cart))
}

module.exports = create;