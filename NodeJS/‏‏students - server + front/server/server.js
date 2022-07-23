const http = require("http");
const fs = require("fs");
const read = require("./services/read");
const path = require("path");
const delFn = require("./services/delete");
const create = require("./services/create");
const update = require("./services/update");
const PORT = 3434;
const studentsJson = __dirname + "/data/students.json";

const viewsDir = path.join(__dirname + "/./views");

const server = http.createServer(async (req, res) => {
  const method = req.method;
  const url = req.url;

  switch (url) {
    case "/read":
      const students = read();
      console.log(students);
      break;
    case "/":
      fs.createReadStream(viewsDir + "/addStudent/create.html").pipe(res);
      break;
    case "/create":
      fs.createReadStream(viewsDir + "/addStudent/create.html").pipe(res);
      break;
    case "/create.js":
      fs.createReadStream(viewsDir + "/addStudent/create.js").pipe(res);
      break;
    case "/update":
      fs.createReadStream(viewsDir + "/upDateStudent/update.html").pipe(res);
      break;
    case "/update.js":
      fs.createReadStream(viewsDir + "/upDateStudent/update.js").pipe(res);
      break;
    case "/delete":
      fs.createReadStream(viewsDir + "/delete/delete.html").pipe(res);
      break;
    case "/delete.js":
      fs.createReadStream(viewsDir + "/delete/delete.js").pipe(res);
      break;
    case "/studentsJson":
      const reader = fs.readFileSync(studentsJson, "utf-8");
      res.end(reader);
      break;
    case "/api/students":
      switch (method) {
        case "DELETE":
          const delBuffer = [];
          for await (const chunk of req) {
            delBuffer.push(chunk);
          }
          const delObj = JSON.parse(Buffer.concat(delBuffer).toString());
          const id = delObj.id;
          if (!id) {
            res.end(console.log("Cannot Delete"));
          } else delFn(id);
          res.end();
          break;
        case "POST":
          const delBuffer2 = [];
          for await (const chunk of req) {
            delBuffer2.push(chunk);
          }
          const delObj2 = JSON.parse(Buffer.concat(delBuffer2).toString());
          res.end(create(delObj2));
          break;
        case "PUT":
          const delBuffer3 = [];
          for await (const chunk of req) {
            delBuffer3.push(chunk);
          }
          const delObj3 = JSON.parse(Buffer.concat(delBuffer3).toString());
          res.end(update(delObj3));
          break;
        default:
          break;
      }
    default:
      fs.createReadStream(viewsDir + "/404/404.html").pipe(res);
      break;
  }
});
server.listen(PORT);
console.log("hi server listening on port: " + PORT);
