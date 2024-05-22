const express=require("express");

const app=express();

const portfoliocontrollers=require("./controllers/portfoliocontroller");
const portfoliocontroller = require("./controllers/portfoliocontroller");

app.listen(3000,()=>{
    console.log("The Server Is On");
})

app.set("view engine","ejs");

app.use(express.json());
app.use(express.static("public"));

app.get("/",portfoliocontrollers.get_landing_page);

app.get("/allmails",portfoliocontroller.get_allmails);

app.get("/mail/:id",portfoliocontroller.get_mail_id);