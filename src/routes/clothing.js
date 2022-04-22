const express = require('express')
const { headers, formatData } = require('../utils/clothing-csv-formater')

const router = express.Router()
const Clothing = require('../models/Clothing')

// get all clothing
router.get('/', (req, res) => {
  Clothing.find()
    .then((allClothing) => res.json({ results: allClothing.reverse() }))
    .catch((error) => res.json({ error: error.message }))
})

// get clothing in the correct CSV Format
router.get('/csv-format', async (req, res) => {
  const allClothing = await Clothing.find()
  const csvFormatedClothing = await formatData(allClothing)
  res.json({ results: { headers, csvFormatedClothing } })
})

// get one clothing by SKU
router.get('/:sku', (req, res) => {
  const { sku } = req.params

  Clothing.findOne({ 'attributes.sku': sku })
    .then((searchResult) => {
      if (searchResult) res.json({ result: searchResult })
      else
        res.json({
          error: `No results found when searching for SKU ${sku}`,
        })
    })
    .catch((error) => res.json({ error: error.message }))
})

// add clothing
router.post('/', (req, res) => {
  const newClothing = req.body

  Clothing.create(newClothing)
    .then((createdClothing) => res.json({ createdClothing }))
    .catch((error) => res.json({ error: error.message }))
})

// delete clothing by id
router.delete('/:id', (req, res) => {
  const { id } = req.params

  Clothing.findByIdAndDelete(id)
    .then((result) => res.json({ result }))
    .catch((error) => res.json({ error: error.message }))
})

module.exports = router
