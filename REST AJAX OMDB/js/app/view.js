export function displayInfo(res) {
    var btn = document.querySelector("#btn");
  var main = document.querySelector("main");
  var obj=res.Search

main.innerHTML = obj.reduce((toAppend, item) => {
    return toAppend + `<div><h1>${item.Title}</h1><p>${item.Poster}</p></div>`;
}, '')
}
