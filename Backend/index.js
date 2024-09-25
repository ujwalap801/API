const express = require("express");
const app = express();

let port =3000;
// to get the data from server in crt format we use 
app.use(express.urlencoded({extended:true}))
// to parse the json data
app.use(express.json())
app.get("/register",(req,res)=>
{
    let {user, passowrd}= req.query;
    res.send(`welcome to ${user}`);
})


app.post("/register",(req,res)=>
    {
        let {user, passowrd}= req.body;
        res.send(`standard Post response ${user}`);
    })

app.listen(port,()=>
{
    console.log(`listening to port ${port}`);
})