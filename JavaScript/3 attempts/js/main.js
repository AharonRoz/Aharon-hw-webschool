// var div=document.getElementById("main");
// var fName = document.getElementById("fName");
// var pass = document.getElementById("pass");
// var fv = fName.vlaue;
// var pv = fName.vlaue;
// var arr = [["Pol", "pol123", "123"], ["Tom", "tom123", "123"], ["Ron", "ron123", "123"]];
// const nameList=[];
// const passList=[];
// // fv=fv.toLowerCase();
// // pv=pv.toLowerCase();

// for (let i = 0; i < arr.length; i++) {
//   nameList.push ((arr[i])[1]);
//   passList.push((arr[i])[2]);
// }



// function print() {
//   for (let e = 0; e < nameList.length; e++) {
//     if (fv == nameList[e] && pv == passList[e]) {
//     div.innerHTML=`<h1>Welcome ${fName[e]}<h1>`
//     } else{
//       alert(fv)
//       break
//     }
//   }
// } 3 ניסיונות התחברות

const FormElems = {
  username: document.querySelector("#email"),
  password: document.querySelector("#password"),
  button: document.querySelector("button"),
  main: document.querySelector("main"),
};

const Users = [
  { username: "meir@mail.com", password: "pass123", fName: "Meir" },
  { username: "mickeymouse@mail.com", password: "pass123", fName: "Aharon" },
  { username: "naor@mail.com", password: "pass123", fName: "Naor" },
  { username: "keren@mail.com", password: "pass123", fName: "Keren" },
  { username: "michael@mail.com", password: "pass123", fName: "Michael" },
];

FormElems.button.addEventListener("click", login);
FormElems.username.addEventListener("input", checkValidEmail);

function checkValidEmail() {
  FormElems.username.style.borderColor = "rgba(0,0,0,0)";
  var x = FormElems.username.value;
  if (x.includes(" ")) {
    FormElems.username.value = x.replace(" ", "");
  }
  if (x.length < 6 || !x.includes(".") || !x.includes("@")) {
    FormElems.username.style.borderColor = "red";
  }
}

function login() {
  try {
    FormElems.username.style.border = "";
    FormElems.password.style.border = "";
    var username = FormElems.username.value.toLowerCase();
    var password = FormElems.password.value;

    if (username && password) {
      if (
        username.includes("@") === false ||
        username.includes(".") === false
      ) {
          throw new Error("You're email is not valid.")
      }
      var fName = "";
      for (let i = 0; i < Users.length; i++) {
        const u = Users[i];
        if (u.username == username && u.password == password) {
          fName = u.fName;
          break;
        }
      }
      if (fName) {
        var h1 = document.createElement("h1");
        h1.innerText = `Welcome, ${fName}`;
        FormElems.main.innerHTML = "";
        FormElems.main.append(h1);
      } else {
        alert("Wrong credentials");
      }
    } else {
      if (!username) {
        FormElems.username.style.border = "solid red 3px";
      }
      if (!password) {
        FormElems.password.style.border = "solid red 3px";
      }
      throw new Error("You must fill the required fields");
    }
  } catch (err) {
    console.log(err);
  }
}