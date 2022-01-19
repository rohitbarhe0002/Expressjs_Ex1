const express = require("express")

const app = express();

//app.get(route,callback)

app.get("/",(req,res)=>{
    res.send("hello Express from rohit")

})
app.get("/about",(req,res)=>{
    res.send("About express")

})

app.get("/contact",(req,res)=>{
    res.send("contact to express community")

})
app.get("/service",(req,res)=>{
    res.send("Express services")

})
app.listen(8001,()=>{
    console.log("listning the port at 8000");
})

