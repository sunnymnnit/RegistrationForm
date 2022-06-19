const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/registration",{

}).then(()=>{
    console.log("connected with database registration");
}).catch((e)=>{
    console.log(`error in data base connection {e}`);
});