const fs = require("fs");
const read = require("./read");
const args = process.argv.slice(2);
const product = args[1] ? JSON.parse(args[1]) : "0";

function create() {
  const cart = read();
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === product.id) {
      cart[i].name = product.name;
      cart[i].price = product.price;
      fs.writeFileSync(__dirname + "/new.json", JSON.stringify(cart));
      break;
    }
  }
}

module.exports = create;
