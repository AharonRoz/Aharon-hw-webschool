export function getInfo(val) {
   
  return new Promise((resolve, reject) => {
    fetch(`http://www.omdbapi.com/apikey=4d8f3320&s=${val}`)
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
