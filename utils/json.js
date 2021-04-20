import fs from 'fs'
import croles from './json/croles.js'
import whatis from './json/whatis.js'
import welcome from './json/welcome.js'
import goodbye from './json/goodbye.js'

export const writeSnipes = (data) =>
  fs.writeFileSync('utils/json/snipe.json', JSON.stringify(data, null, 2))

export const getSnipes = () =>
  JSON.parse(fs.readFileSync('utils/json/snipe.json'))

export const randomWelcome = (mention) => 
  welcome(mention)[(Math.random() * welcome(0).length) | 0]

export const randomGoodbye = (username) => 
  goodbye(username)[(Math.random() * goodbye(0).length) | 0]

export const getCRoles = croles
export const getWhatIsDict = whatis