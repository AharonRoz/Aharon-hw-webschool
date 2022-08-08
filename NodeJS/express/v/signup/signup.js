const form = document.getElementById("f");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const json = {};
  for (const [key, value] of data) {
    json[key] = value;
  }
  if (json.name == "" || json.pass == "" || json.role == "") {
    alert("You must specify all properties");
  } else fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
        "content-Type": "application/json",
    }
  });
}
)    
