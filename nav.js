const express =  require('express');
 const app = express()
 const port = 3000

 app.get('/',(req,res)=>{
res.send("welcome to my Home")
 });
  app.get('/about',(req,res)=>{
res.send([{
    id:1,
    name:"rohit",
    age:21,
    company:"bestpeers",
},{
    id:1,
    name:"rohit",
    age:21,
    company:"bestpeers",
},{
    id:1,
    name:"rohit",
    age:21,
    company:"bestpeers",
}])
 });
  app.get('/contact',(req,res)=>{
res.status(200).write("<h1>welcome to my contact<h1>")
res.status(200).write("<h1>welcome to my contact<h1>")
res.status(200).write("<h1>welcome to my contact<h1>")
res.send()
 });
  app.get('/temp',(req,res)=>{
res.send("welcome to my temp")
 });
 app.listen(port,()=>{
     console.log(`listning to the port no ${port}`);
 })