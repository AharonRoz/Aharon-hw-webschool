import * as Model from "./model.js";
import * as View from "./view.js";

export function init() {
  var search = document.querySelector("#search")
  search.addEventListener("input", function() {
     Model.getInfo(this.value)
    .then(View.displayInfo)
    .catch((err) => {
      console.log(err);
    });
  })
 
}
