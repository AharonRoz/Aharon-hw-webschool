const create = require("./create");
const read = require("./read");
const update = require("./update");
const args = process.argv.slice(2);
const command = args[0].toLocaleLowerCase();
const product = args[1] ? JSON.parse(args[1]) : "0";

switch (command) {
  case "read":
    const cart = read();
    console.log(cart);
    break;
  case "create":
    const cart1 = read();
    if (cart1.find((o) => o.id === product.id)) {
      console.log("ID Error");
    } else create(product);
    break;
  case "update":
    update();
    break;
    case "sum":
      let sum=0  
    const cart2 = read();
    for (let index = 0; index < cart2.length; index++) {
      
       sum+=cart2[index].price;
      
    };console.log(sum)
    break;
  default:
    console.log("Please use Read, Update, or Create commands");
    console.log(process.argv.slice(2));
    break;
}
