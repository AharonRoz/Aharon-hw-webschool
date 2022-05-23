var div=document.getElementById("main");
var fName = document.getElementById("fName");
var pass = document.getElementById("pass");
var fv = fName.vlaue;
var pv = fName.vlaue;
var arr = [["Pol", "pol123", "123"], ["Tom", "tom123", "123"], ["Ron", "ron123", "123"]];
const nameList=[];
const passList=[];
// fv=fv.toLowerCase();
// pv=pv.toLowerCase();

for (let i = 0; i < arr.length; i++) {
  nameList.push ((arr[i])[1]);
  passList.push((arr[i])[2]);
}

function print() {
  for (let e = 0; e < nameList.length; e++) {
    if (fv == nameList[e] && pv == passList[e]) {
    div.innerHTML=`<h1>Welcome ${fName[e]}<h1>`
    } else{
      alert(fv)
      break
    }
  }
}
