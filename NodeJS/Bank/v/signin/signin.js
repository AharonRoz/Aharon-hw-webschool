const form = document.getElementById("f");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const json = {};
  for (const [key, value] of data) {
    json[key] = value;
  }
  if (json.name == "" || json.pass == "") {
    alert("You must specify all properties");
  } else fetch("/api/signin", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
        "content-Type": "application/json",
    }
  }
 ) .then((res) => res.json())
 .then((res)=>{
  switch (res) {
    case "no":
      alert("Wrong info")
      break;
      case "yes":
        alert("You'r in :)")
        //do something
        break;
    default:alert(res)
      break;}
  }
  )}
)    
