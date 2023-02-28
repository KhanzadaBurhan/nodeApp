const express=require("express");
// const app=express();
const router=express.Router();
const {isLoggedIn} = require('../Middleware/isloging')
const {login, uploading, getimage, Delete,signup,updateuser,deleteUser} = require("../Controller/All-Controller")
const {upload} = require("../Middleware/multer");


router.post("/login",login)
router.post("/signup",signup)
router.post("/images",isLoggedIn, upload.single('image'),uploading)
router.get('/imageGet',isLoggedIn, getimage)
router.delete('/deleteuser', isLoggedIn,deleteUser)
router.delete('/deleteimg',isLoggedIn, Delete)
router.put("/updateuser",isLoggedIn,updateuser)

module.exports=router;


