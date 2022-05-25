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
  str += '\n\n<br/><br/>Attributes'
  str += attributes.category ? `\n<br/>Category: ${attributes.category}` : ''
  str += `\n<br/>Color(s): ${stringifyColors(attributes.colors)}`
  str += `\n<br/>Size: ${stringifySizes(attributes.size)}  ${stringifyFit(
    attributes.fit,
  )}`
  str += `\n<br/>Fiber: ${attributes.fiber}`
  const otherDetails = stringifyOtherDetails(attributes)
  str += otherDetails ? `\n<br/>Other Details: ${otherDetails}` : ''

  // measurements - - - - - - -  -  --  --

  str += '\n\n<br/><br/>Measurements'
  str += measurements.shoulderWidth
    ? `\n<br/>Shoulder Circumference ${measurements.shoulderWidth * 2} inches`
    : ''

  str += measurements.chestWidth
    ? `\n<br/>Chest Circumference ${measurements.chestWidth * 2} inches`
    : ''

  str += measurements.sleeveLength
    ? `\n<br/>Sleeve Length: ${measurements.sleeveLength} inches`
    : ''

  str += measurements.bicepWidth
    ? `\n<br/>Bicep Circumference ${measurements.bicepWidth * 2} inches`
    : ''

  str += measurements.waistWidth
    ? `\n<br/>Waist Circumference ${measurements.waistWidth * 2} inches`
    : ''

  str += measurements.bottomHemSweep
    ? `\n<br/>Bottom Hem Sweep: ${measurements.bottomHemSweep} inches`
    : ''

  str += measurements.hipWidth
    ? `\n<br/>Hip Circumference ${measurements.hipWidth * 2} inches`
    : ''

  str += measurements.topOfChestToCrotch
    ? `\n<br/>Top of Shoulder/Chest to Crotch: ${measurements.topOfChestToCrotch} inches`
    : ''
  str += measurements.rise ? `\n<br/>Rise: ${measurements.rise} inches` : ''

  str += measurements.thighWidth
    ? `\n<br/>Thigh Circumference ${measurements.thighWidth * 2} inches`
    : ''

  str += measurements.calfWidth
    ? `\n<br/>Calf Circumference ${measurements.calfWidth * 2} inches`
    : ''

  str += measurements.inseam
    ? `\n<br/>Inseam: ${measurements.inseam} inches`
    : ''

  str += measurements.outseam
    ? `\n<br/>Outseam: ${measurements.outseam} inches`
    : ''

  str += measurements.garmetLength
    ? `\n<br/>Garment Length: ${measurements.garmetLength} inches`
    : ''

  return str
}

module.exports = getDescriptionData
