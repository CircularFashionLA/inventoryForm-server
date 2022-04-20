/* eslint-disable no-restricted-syntax */
const headers = [
  { label: 'Stock Keeping Unit', key: 'sku' },
  { label: 'Product Name', key: 'productName' },
  { label: 'Category', key: 'category' },
  { label: 'SubCategory', key: 'subCategory' },
  { label: 'Image', key: 'image' },
  { label: 'Size', key: 'size' },
  { label: 'Colors', key: 'colors' },
  { label: 'Off Shoulder', key: 'offShoulder' },
  { label: 'Sleeveless', key: 'sleeveless' },
  { label: 'Stretchy', key: 'stretchy' },
  { label: 'Adjustable', key: 'adjustable' },
  { label: 'Fit', key: 'fit' },
  { label: 'Fiber', key: 'fiber' },
  { label: 'Waist Width', key: 'waistWidth' },
  { label: 'Shoulder Width', key: 'shoulderWidth' },
  { label: 'Chest Width', key: 'chestWidth' },
  { label: 'Sleeve Length', key: 'sleeveLength' },
  { label: 'Bicep Width', key: 'bicepWidth' },
  { label: 'Garmet Length', key: 'garmetLength' },
  { label: 'Bottom Hem Sweep', key: 'bottomHemSweep' },
  { label: 'Hip Width', key: 'hipWidth' },
  { label: 'Thigh Width', key: 'thighWidth' },
  { label: 'Email', key: 'rise' },
  { label: 'Inseam', key: 'inseam' },
  { label: 'Outseam', key: 'outseam' },
  { label: 'Top of Chest to Crotch', key: 'topOfChestToCrotch' },
]

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const stringifyColors = (colors) => {
  let str = ''
  for (const color in colors) {
    if (colors[color] === true) {
      str += `${capitalize(color)}, `
    }
  }
  return str.slice(0, -2)
}

const stringifySizes = (sizes) => {
  let str = ''
  for (const size in sizes) {
    if (sizes[size] === true) {
      if (size === 'twoX') str += `xx, `
      else if (size === 'threeX') str += `xxx, `
      else str += `${size.toUpperCase()}, `
    }
  }
  return str.slice(0, -2)
}

const formatData = (clothing) =>
  new Promise((resolve, reject) => {
    try {
      const allFormatedClothings = []
      clothing.forEach((item) => {
        const csvJson = {
          ...item.measurements,
          ...item.attributes,
        }
        csvJson.colors = stringifyColors(csvJson.colors)
        csvJson.size = stringifySizes(csvJson.size)
        allFormatedClothings.push(csvJson)
      })
      resolve(allFormatedClothings)
    } catch (error) {
      reject(error)
    }
  })

module.exports = { formatData, headers }
