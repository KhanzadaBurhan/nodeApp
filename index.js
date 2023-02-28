const express = require('express');
const app = express();
app.use(express.json());
// const jWtoken = require('jsonwebtoken');
// const multer = require('multer');
const port= 4004;
// const sec = "ajksdhfush";
// const fs=require("fs");

const db = require('./API/helper/conncection');

const APIRouter=require("./API/Routes/API");
app.use("/",APIRouter)




// // app.get('/', (req,res)=>{
// //     res.send('This is my First App')
// // })

// const isLoggedIn = (req,res,next)=>{
//     if (req.headers && req.headers.token) {
//         var decoded = jWtoken.verify(req.headers.token, sec);
//         console.log(decoded)
//         req.email = decoded.email;
//         next();
//     }else{
//         return res.status(401).json({
//             message: 'Invalid Token'
//         })
//     }
// }

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: async function (req, file, cb) {
//       let dir = "uploads/"+req.email;
//       if (!fs.existsSync(dir)){
//         await fs.mkdirSync(dir, {recursive: true}, err => {});
//       }
//       cb(null, dir);
//     },
    
//     filename: function (req, file, cb) {
//       console.log(file);
//       let extenstion = file.originalname.split('.')
//       cb(null, file.fieldname + "-" + Date.now() + "."+[extenstion[1]]);
//     },
//   }),
// });

// /////////// login
// app.post('/login', (req, res) => {
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
//       });
//     }
//   });
// //   images
//   app.post('/images',isLoggedIn,upload.single("image"),(req,res)=>{
//     return res.status(200).json({
//         message:'access successfully'
//     })
//   })

//   app.get('/imageGet', isLoggedIn,(req, res) => {
//     fs.readdir("uploads/" + req.email, (err, files) => {
//       if (err) {
//         return res.status(500).json({
//           message: " Error:Cannot find directory ",
//         });
//       }
//       // const fileUrls = files.map((file) => {
//       //   return `${req.protocol}://${req.hostname}:${port}/uploads/${req.email}/${file}`;
//       // });
//       return res.json({
//         files
//       });
//     });
//   })

//   app.delete('/delimage', isLoggedIn, (req, res) => {
//     fs.rmdir('uploads/' + req.email ,{recursive:true},(err)=>{
//       if(err){
//         res.send("File not exists")
//       }else{
//         res.status(200).json({
//           message: 'Deleted Successfully...'
//         })
//       }
//     })
//   })

app.listen(port, ()=>{
    console.log(`this "${port}" port is working`)
})
