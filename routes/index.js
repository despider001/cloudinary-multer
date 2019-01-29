let express = require('express');
let router = express.Router();
let upload = require('../config/multer');
let cloudinary = require('../config/cloudinary');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/upload', upload.single('image'), function(req, res, next) {
  cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
    if (err) console.log(err);
    // console.log(result);
    res.send(`Successfully Uploaded! Image URL: ${result.secure_url}`);
  });

});

module.exports = router;
