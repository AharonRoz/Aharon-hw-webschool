export function getInfo() {
    var search = document.querySelector("#search")
  return new Promise((resolve, reject) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4d8f3320&s=${search.value}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        resolve(arr);
        console.log(arr)
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}
