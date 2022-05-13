/* eslint-disable no-restricted-syntax */
const stringifyFit = (fits) => {
  let str = ''
  for (const fit in fits) {
    if (fits[fit] === true) {
      if (fit === 'tightAndStretchy') str += 'Tight and Stretchy, '
      else if (fit === 'slimTailored') str += 'Slim Tailored, '
      else if (fit === 'looselyOversized') str += 'Loosely Oversized, '
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

const stringifyOtherDetails = (attributes) => {
  const details = []
  if (attributes.sleeveless) details.push('Sleeveless, ')
  if (attributes.offShoulder) details.push('Off Shoulder, ')
  if (attributes.adjustable) details.push('Adjustable, ')
  if (attributes.stretchy) details.push('Stretchy, ')
  if (attributes.areShorts) details.push('Shorts, ')

  if (details.length > 0) {
    let detailStr = ''

    details.forEach((detail) => {
      detailStr += detail
    })

    return detailStr.slice(0, -2)
  }
  return null
}

const getDescriptionData = (item) => {
  const { attributes, measurements } = item
  let str = ''
  str += 'Attributes'
  str += attributes.category ? `\nCategory: ${attributes.category}` : ''
  str += `\nColor(s): ${stringifyColors(attributes.colors)}`
  str += `\nSize: ${stringifySizes(attributes.size)}  ${stringifyFit(
    attributes.fit,
  )}`
  str += `\nFiber: ${attributes.fiber}`
  const otherDetails = stringifyOtherDetails(attributes)
  str += otherDetails ? `\nOther Details: ${otherDetails}` : ''

  // measurements - - - - - - -  -  --  --

  str += '\n\nMeasurements'
  str += measurements.shoulderWidth
    ? `\nShoulder Circumference ${measurements.shoulderWidth * 2} inches`
    : ''

  str += measurements.chestWidth
    ? `\nChest Circumference ${measurements.chestWidth * 2} inches`
    : ''

  str += measurements.sleeveLength
    ? `\nSleeve Length: ${measurements.sleeveLength} inches`
    : ''

  str += measurements.bicepWidth
    ? `\nBicep Circumference ${measurements.bicepWidth * 2} inches`
    : ''

  str += measurements.waistWidth
    ? `\nWaist Circumference ${measurements.waistWidth * 2} inches`
    : ''

  str += measurements.bottomHemSweep
    ? `\nBottom Hem Sweep: ${measurements.bottomHemSweep} inches`
    : ''

  str += measurements.hipWidth
    ? `\nHip Circumference ${measurements.hipWidth * 2} inches`
    : ''

  str += measurements.topOfChestToCrotch
    ? `\nTop of Chest to Crotch: ${measurements.topOfChestToCrotch} inches`
    : ''
  str += measurements.rise ? `\nRise: ${measurements.rise} inches` : ''

  str += measurements.thighWidth
    ? `\nThigh Circumference ${measurements.thighWidth * 2} inches`
    : ''

  str += measurements.calfWidth
    ? `\nCalf Circumference ${measurements.calfWidth * 2} inches`
    : ''

  str += measurements.inseam ? `\nInseam: ${measurements.inseam} inches` : ''

  str += measurements.outseam ? `\nOutseam: ${measurements.outseam} inches` : ''

  str += measurements.garmetLength
    ? `\nGarmet Length: ${measurements.garmetLength} inches`
    : ''

  return str
}

module.exports = getDescriptionData
