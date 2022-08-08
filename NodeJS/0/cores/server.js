const express = require('express');
const app = express();

app.put('/',(req,res)=>{
    res.set('Access-Control-Allow-Origin','*')
    res.send({msg:"Hi from server"})
})

app.listen(3434)