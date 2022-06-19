const express =require("express");
const app=express();
const path=require("path");
const reg=require("./models/registers");
require("./db/conn");
const port = process.env.PORT||3000;

const hbs=require("hbs");
const mypath=path.join(__dirname,"../templates/vie/");  // to go to index.html
const par=path.join(__dirname,"../templates/partia/");
// app.use(express.static("./public"));
hbs.registerPartials(par);
app.set("view engine","hbs");
app.set("views",mypath);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/",async(req,res)=>{
    try{
        const filldb=new reg({
            firstname : req.body.firstname,
    lastname :req.body.lastname,
    mothername :req.body.mothername,
    fathername :req.body.fathername,
    address :req.body.address,
    dob :req.body.dob,
    pincode :req.body.pincode,
    course :req.body.course,
    email :req.body.email
        })
      const res=  await filldb.save();
      res.send("filled successfully");
    }
    catch(error)
    {
        console.log(`there is an error {error}`);
        res.status(400).send(error);
    }
})
app.listen(port,()=>{
    console.log("server is running");
})