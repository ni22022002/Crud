// const mongoose=require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/usercrudapp").then(()=>{
//     console.log("connetion succesfulll");
// }).catch((e)=>{
//     console.log(e);
// })


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/usercrudapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const Schema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Usermodel = mongoose.model("User",Schema);

module.exports =Usermodel;


