const mongoose = require('mongoose');

const db = 'mongodb+srv://burhankhanbk12345:AtZESq67osHEkTUL@cluster0.s3q5odx.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery',true);

const dbcon = async(req,res)=>{
   await mongoose.connect(db).then(()=>{
        console.log("DB coneccted");
    }).catch(()=>{
        console.log("DB Not coneccted");

    })
}

dbcon();