const express = require('express')

const router = express.Router()
const Clothing = require('../models/Clothing')

// get all clothing
router.get('/', (req, res) => {
    console.log('fetching clothes')
    Clothing.find()
        .then((allClothing) => res.json({ results: allClothing }))
        .catch(error => res.json({ error }))

})

// get one clothing by SKU

// add clothing

// delete clothing by id

module.exports = router