const fs = require("fs");
const create = require("./create");
const deleteStu = require("./delete");
const read = require("./read");
const update = require("./update");
const args = process.argv.slice(2);
const student = args[1] ? JSON.parse(args[1]) : "0";
const http = require("http");
const server = http.createServer((req, res) => {
  const method = req.method;
  const command = req.url;
  console.log(command);
  switch (command) {
    case "/read":
      const students = read();
      console.log(students);
      break;
    case "/create":
      const students1 = read();
      if (students1.find((o) => o.id === student.id)) {
        console.log("ID Error");
      } else create(student);
      break;
    case "/delete":
      const students2 = read();
      if (students2.find((o) => o.id === student.id)) {
        deleteStu();
      } else console.log("ID Error");
      break;
    case "/update":
      update();
      break;
    default:
      console.log("Please use Read, Update, Delete, or Create commands");
      break;
  }
});

const btn = document.getElementById("btn");
function makeList() {
  let listData = read();
  (listContainer = document.createElement("div")),
    (listElement = document.createElement("ul")),
    (numberOfListItems = listData.length);
  document.getElementsByTagName("main")[0].appendChild(listContainer);
  listContainer.appendChild(listElement);
  for (i = 0; i < numberOfListItems; ++i) {
    listItem = document.createElement("li");
    listItem.innerHTML =
      "Student " +
      listData[i].name +
      " ID: " +
      listData[i].id +
      " with average grade: " +
      listData[i].avg;
    listElement.appendChild(listItem);
  }
}
btn.addEventListener("click", makeList);
// const form = document.getElementById("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const jData = {};
//   const data = new FormData(form);
//   for (const [key, value] of data) {
//    jData[key] = value;
//   }
//   JSON.stringify(jData)
//   console.log(jData);
// });

const port = 3434;
server.listen(port);
