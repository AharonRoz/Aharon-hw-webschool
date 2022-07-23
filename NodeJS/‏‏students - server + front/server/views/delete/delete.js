const form = document.getElementById("f");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const delJson = {};
  for (const [key, value] of data) {
    delJson[key] = value;
  }
  fetch("http://localhost:3434/api/students", {
    method: "DELETE",
    body: JSON.stringify(delJson),
  });
});
