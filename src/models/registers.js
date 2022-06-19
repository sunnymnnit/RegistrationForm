const mongoose= require ("mongoose");
const employeeSchema=new mongoose.Schema({
    firstname : {type:String},
    lastname :{type:String},
    mothername :{type:String},
    fathername :{type:String},
    address :{type:String},
    gender :{type:String},
    dob :{type:String},
    pincode :{type:String},
    course :{type:String},
    email :{type:String}
})

const reg=new mongoose.model("details",employeeSchema);
module.exports=reg;