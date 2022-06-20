export function displayInfo(res) {
    var btn = document.querySelector("#btn");
  var main = document.querySelector("main");
  var obj=res.Search
  btn.addEventListener("click", main1);
  function main1(){  main.innerHTML = obj.reduce((toAppend, item) => {
    return toAppend + `<div><h1>${item.Title}</h1><p>${item.Poster}</p></div>`;
  }, "")}
}
