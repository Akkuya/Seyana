import * as utils from '../utils/index.js'

export default async ({ commandBody, message }) => {
  let person = commandBody.substring(6)
  person = person.charAt(0).toUpperCase() + person.substring(1)

  const whatIsDict = await utils.json.whatis({ person })

  message.channel.send(`${person} is ${whatIsDict[Math.floor(Math.random() * whatIsDict.length)]}`)
}