
const multer =require("multer")
const fs=require("fs");

const upload = multer({
  storage: multer.diskStorage({
    destination: async function (req, file, cb) {
      let dir = "uploads/"+req.email;
      if (!fs.existsSync(dir)){
        await fs.mkdirSync(dir, {recursive: true}, err => {});
      }
      cb(null, dir);
    },
    
    filename: function (req, file, cb) {
      console.log(file);
      let extenstion = file.originalname.split('.')
      cb(null, file.fieldname + "-" + Date.now() + "."+[extenstion[1]]);
    },
  }),
});

module.exports= {upload};