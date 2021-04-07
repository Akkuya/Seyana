import fs from 'fs'
import croles from './json/croles.js'
import whatis from './json/whatis.js'

export const writeSnipes = (data) =>
  fs.writeFileSync('utils/json/snipe.json', JSON.stringify(data, null, 2))

export const getSnipes = () =>
  JSON.parse(fs.readFileSync('utils/json/snipe.json'))

export const getCRoles = croles

export const getWhatIsDict = whatis