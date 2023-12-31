const express=require("express")
const path=require('path')

const app=express();

app.use(express.json())


app.use(express.static(path.join(__dirname,'./public')))

app.get('/',(req,res)=>{
    res.send("Hello AlienX");
})

app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
})

app.listen(3333,()=>console.log("Listening to it..."));