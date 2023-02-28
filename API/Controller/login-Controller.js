// const {objUser}=require("./objUser")
// const jWtoken = require('jsonwebtoken');
// const sec = "ajksdhfush";
// login=(req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     const objUsers = objUser.find((ou) => { 
//         return ou.email === email && ou.password === password
//     });

//     if (objUsers){
//         const token = jWtoken.sign({email}, sec)
//       return res.status(200).json({
//         message: 'Successfully login',
//         token : token
//       });
//     } else{
//       return res.status(401).json({
//         message: 'Invalid Email or Password'
//       })}}
//       module.exports={login};