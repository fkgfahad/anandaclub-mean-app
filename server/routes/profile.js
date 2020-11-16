const router = require('express').Router();
const cloudinary = require('cloudinary');
const multipart = require('connect-multiparty')();

router.post('/pro', multipart, (req, res) => {
  console.log(req.files);
  cloudinary.uploader.upload(req.files.image.path, image => {
    if (image.url) {
      const data = {
        status: 'ok',
        message: 'Got the image',
        image: image
      }
      res.status(200).json(data);
    } else {
      const data = {
        status: 'ko',
        message: 'Something went wrong',
        image: null
      }
      res.status(500).json(data);
    }
  });
});

module.exports = router;
