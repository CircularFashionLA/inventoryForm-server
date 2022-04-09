const mongoose = require('mongoose')

const clothingSchema = new mongoose.Schema({
    attributes: {

        category: String,
        offShoulder: String,
        sleeveless: String,
        subCategory: String,
        productName: String,
        sku: String,
        image: String,
        stretchy: Boolean,
        adjustable: Boolean,
        colors: {
            black: Boolean,
            white: Boolean,
            grey: Boolean,
            brown: Boolean,
            beige: Boolean,
            navy: Boolean,
            pink: Boolean,
            red: Boolean,
            orange: Boolean,
            yellow: Boolean,
            green: Boolean,
            turquoise: Boolean,
            bluekpruple: Boolean,
            maroon: Boolean,
        },
        size: {
            xs: Boolean,
            s: Boolean,
            m: Boolean,
            l: Boolean,
            xl: Boolean,
            twoX: Boolean,
            threeX: Boolean,
        },
        fit: String,
        fiber: String
    },
    measurements: {
        waistWidth: Number,
        topOfChestToCrotch: Number
    }
})

module.exports = mongoose.model('Clothing', clothingSchema)