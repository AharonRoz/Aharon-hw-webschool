const btn = document.getElementById('btn');
btn.addEventListener("click", ()=>{
    fetch("http://localhost:3434/",{
        method: 'PUT'
    } )
    .then(res=>res.json())
    .then(res=>{console.log("success", res)})
})