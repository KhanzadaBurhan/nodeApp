// const {objUser}=require("./objUser")
const jWtoken = require('jsonwebtoken');
const sec = "ajksdhfush";
const fs=require("fs");
const port= 4004;
const path = require('path');
const dbmodel = require('../model/userschema');
const { db } = require('../model/userschema');



// const objUser=[
//     {email:"abc1@gmail.com", password: "01"},
//     {email:"abc2@gmail.com", password: "02"},
//     {email:"abc3@gmail.com", password: "03"},
//     {email:"abc4@gmail.com", password: "04"},
//     {email:"abc5@gmail.com", password: "05"},
//     {email:"abc6@gmail.com", password: "06"},
// ]

/////Signup

  const signup = async (req,res)=>{
    const user = new dbmodel(req.body);
    console.log(user);
    try {
      const saveuser = await user.save();
      res.status(200).json({
        message:"user create", user
      }) 
    } catch (error) {
      res.status(404).json({
        message:"user not create"
      })
    }
  }


/////login
const login23=  (req, res) => {
    const {email,password} = req.body;
    dbmodel.findOne({email:email,password:password}).then(user=>{
      if(user){
      const token = jWtoken.sign({email}, sec)
      return res.status(200).json({
        message: 'Successfully login',
        token : token
      });
    }else{
      return res.status(500).json({
        message:"Invalid"
    })
}})
  }

  /////////UpdateUser
  const updateuser = async (req, res) => {
    try {
      const { email } = req.body;
      const updatedUser = await dbmodel.updateOne({ email: req.email }, { email }, { new: true });
      if (updatedUser) {
        const token = jWtoken.sign({ email }, sec);
        return res.status(200).json({
          message: "updated successfully !",
          token
        });
      } else {
        return res.status(404).json({
          message: "not successful!",
        });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "an error occurred",
      });
    }
  };
    ////////// upload
      const uploading=(req,res)=>{
        dbmodel.findOne({email:req.email},(err,user)=>{
         user.image = req.file.path
          user.save((err)=>{
            console.log(err);
          })  
        })
        return res.status(200).json({
            message:'access successfully'
        })
      }

//////////////getImage
      const getimage = (req, res) => {
          fs.readdir("uploads/" + req.email, (err, files) => {
            if (err) {
              return res.status(500).json({
                message: " Error:Cannot find directory ",
              });
            }
            const fileUrls = files.map((file) => {
              return `${req.protocol}://${req.hostname}:${port}/images/${file}`;
            });
            return res.json({
              files:fileUrls
            });
          });
        }
        
        ///////Delete
const Delete = (req, res) => {
    fs.rmdir('uploads/' + req.email ,{recursive:true},(err)=>{
      if(err){
        res.send("File not exists")
      }else{
        res.status(200).json({
          message: 'Deleted Successfully...'
        })
      }
    })
  }

  ////////////Delete User

const deleteUser =( (req, res)=> {
  const email = req.email;
  dbmodel.deleteOne({ email: email }, function (err) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: 'User deleted' });
      console.log('User deleted');
    }
  });
});


  
  
  
  
    module.exports = {Delete,getimage,uploading,login:login23, signup,updateuser, deleteUser};