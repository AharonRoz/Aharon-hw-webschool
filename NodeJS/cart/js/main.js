const update = require("./create");
const read = require("./read");

switch (`${process.argv.slice(2,3)}`.toLocaleLowerCase()) {
  case "read":
    read();
    break;
  case "update":
    update(process.argv.slice(3));
    break;

  default:console.log("Please use Read or Create commands");
  console.log((process.argv.slice(2)))
    break;
}
