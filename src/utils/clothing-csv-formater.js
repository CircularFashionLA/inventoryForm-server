const getDescriptionData = require('./description-data')
/* eslint-disable no-restricted-syntax */
const headers = [
  { label: 'handleId', key: 'handleId' },
  { label: 'fieldType', key: 'fieldType' },
  { label: 'name', key: 'name' },
  { label: 'description', key: 'description' },
  { label: 'productImageUrl', key: 'productImageUrl' },
  { label: 'collection', key: 'collection' },
  { label: 'sku', key: 'sku' },
  { label: 'ribbon', key: 'ribbon' },
  { label: 'productOptionName1', key: 'productOptionName1' },
  { label: 'productOptionType1', key: 'productOptionType1' },
  { label: 'productOptionDescription1', key: 'productOptionDescription1' },
  { label: 'productOptionName2', key: 'productOptionName2' },
  { label: 'productOptionType2', key: 'productOptionType2' },
  { label: 'productOptionDescription2', key: 'productOptionDescription2' },
]

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const stringifyColors = (colors) => {
  let str = ''
  for (const color in colors) {
    if (colors[color] === true) {
      str += `${capitalize(color)};`
    }
  }
  return str.slice(0, -1)
}

const stringifySizes = (sizes) => {
  let str = ''
  for (const size in sizes) {
    if (sizes[size] === true) {
      if (size === 'xs') str += 'Extra Small (fits 0-3);'
      else if (size === 's') str += 'Small (fits 2-4);'
      else if (size === 'm') str += 'Medium (fits 6-8);'
      else if (size === 'l') str += 'Large (fits 10-12);'
      else if (size === 'xl') str += 'Extra Large (fits 14-16);'
      else if (size === 'twoX') str += '2X (fits 18-20);'
      else if (size === 'threeX') str += '3X (fits 0-3);'
    }
  }
  return str.slice(0, -1)
}

const formatData = (clothing) =>
  new Promise((resolve, reject) => {
    try {
      const allFormatedClothings = []
      clothing.forEach((item) => {
        const csvJson = {
          // eslint-disable-next-line no-underscore-dangle
          handleId: item._id,
          fieldType: 'Product',
          name: item.attributes.productName,
          description: `${item.attributes.description}${
            item.attributes.addMeasurmentsToDescription
              ? getDescriptionData(item)
              : ''
          }`,
          productImageUrl: item.attributes.image,
          collection: item.attributes.category,
          sku: item.attributes.sku,
          ribbon: 'TBD',
          productOptionName1: 'Size',
          productOptionType1: 'DROP_DOWN',
          productOptionDescription1: stringifySizes(item.attributes.sizes),
          productOptionName2: 'Color',
          productOptionType2: 'COLOR',
          productOptionDescription2: stringifyColors(item.attributes.colors),
        }
        allFormatedClothings.push(csvJson)
      })
      resolve(allFormatedClothings)
    } catch (error) {
      reject(error)
    }
  })

module.exports = { formatData, headers }
