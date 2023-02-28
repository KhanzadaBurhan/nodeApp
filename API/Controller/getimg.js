// const fs=require("fs");



// getimage = (req, res) => {
//     fs.readdir("uploads/" + req.email, (err, files) => {
//       if (err) {
//         return res.status(500).json({
//           message: " Error:Cannot find directory ",
//         });
//       }
//       return res.json({
//         files
//       });
//     });
//   }
//   module.exports={getimage};