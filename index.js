import express from "express";
const app = express();

 let port = 3000;

   app.set("view engine","ejs");

   app.listen(port,()=>{
      console.log("server is runing on port ", port);
   });
    
    app.get("/",(req,res)=> {
        console.log("request Recived ")
       res.render("home.ejs");
    })

    app.get("/hello",(req,res)=> {
       res.send("Hello");
    });

    app.get("/rolldice",(req,res)=>{
      let diceval = Math.floor(Math.random()*6)+1;
       res.render("rolldice.ejs",{ diceval });
    })