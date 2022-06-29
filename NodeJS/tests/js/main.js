var s = document.querySelector("div");
s.innerText = "54654";
s.style.color = "red";
// function go() {
//   setTimeout(()=>{
//     s.style.fontSize="50px";
//     setTimeout(()=>{
//       s.style.fontStyle="italic";
//       setTimeout(()=>{
//         s.style.color="purple";
//       },5000)
//     },5000)
//   },5000)
// }
// go()


// function f1() {
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       s.style.fontSize = "50px";
//       res();
//     }, 5000);
//   })
//     .then(() => {
//       setTimeout(() => {
//         s.style.fontStyle = "italic";
//       }, 5000);
//     })
//     .then(() => {
//       setTimeout(() => {
//         s.style.color = "purple";
//       }, 5000);
//     });
// }
// f1();


async function f() {
await f1()
await f2()
await f3()}
async function f1(){
  setTimeout(() => {
    s.style.fontSize = "50px";
  }, 5000)
}
async function f2(){
  setTimeout(() => {
    s.style.fontStyle = "italic";
  }, 5000)
}
async function f3(){
  setTimeout(() => {
    s.style.color = "purple";
  }, 5000)
}
f()