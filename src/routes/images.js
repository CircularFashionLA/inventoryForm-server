const express = require('express')
const cloudinary = require('../utils/cloudinary')

const router = express.Router()

router.post('/geturl', (req, res) => {
  try {
    console.log('made it to geturl')
    const fileStr = req.body.data
    console.log(`req.body: ${fileStr}`)

    cloudinary.uploader
      .upload(fileStr, {
        upload_preset: 'cfla-inventory',
      })
      .then((uploadRes) => res.json({ url: uploadRes.url }))
  } catch (error) {
    console.log(error)
    res.send('oh my gosh... pls work')
  }
  console.log('after the try catch')
})

module.exports = router
