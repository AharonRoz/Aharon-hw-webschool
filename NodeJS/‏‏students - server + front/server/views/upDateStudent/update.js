const form = document.getElementById("f");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const delJson = {};
  for (const [key, value] of data) {
    delJson[key] = value;
  }
  if (delJson.id == "" || delJson.name == "" || delJson.avg == "") {
    alert("You must specify all properties");
  } else
    fetch("http://localhost:3434/api/students", {
      method: "PUT",
      body: JSON.stringify(delJson),
    });
});
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  fetch("http://localhost:3434/studentsJson", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      makeList(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
function makeList(data) {
  let listData = data;
  (listContainer = document.createElement("div")),
    (listElement = document.createElement("ul")),
    (numberOfListItems = listData.length);
    let main= document.querySelector("main");
    main.innerHTML = "";
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
