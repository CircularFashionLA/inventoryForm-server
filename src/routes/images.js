const express = require('express')
const cloudinary = require('../utils/cloudinary')

const router = express.Router()

router.post('/geturl', (req, res) => {
  try {
    const fileStr = req.body.data

    cloudinary.uploader
      .upload(fileStr, {
        upload_preset: 'cfla-inventory',
      })
      .then((uploadRes) => res.json({ url: uploadRes.url }))
      .catch((error) => res.json({ error: error.message }))
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
