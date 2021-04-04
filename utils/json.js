import fs from 'fs'

export const writeSnipes = (data) =>
  fs.writeFileSync('utils/json/snipe.json', JSON.stringify(data, null, 2))

export const getSnipes = () =>
  JSON.parse(fs.readFileSync('utils/json/snipe.json'))

export const croles = async () => 
  (await import('./json/croles.js')).default

export const whatis = async ({ person }) => 
  (await import('./json/whatis.js')).default({ person })