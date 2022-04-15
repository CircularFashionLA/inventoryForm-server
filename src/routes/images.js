const express = require('express')
require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.cloudinary_name,
  api_key: process.env.cloudinary_key,
  api_secret: process.env.cloudinary_secret,
  secure: true,
})

const router = express.Router()

router.post('/geturl', async (req, res) => {
  const fileStr = req.body.data

  const uploadedResponce = await cloudinary.uploader.upload(fileStr, {
    upload_preset: 'cfla-inventory',
  })
  console.log(uploadedResponce)
  res.json({ msg: 'hi there front end' })
})

module.exports = router
