import * as Model from "./model.js";
import * as View from "./view.js";

export function init() {
  Model.getInfo()
    .then(View.displayInfo)
    .catch((err) => {
      console.log(err);
    });
}
