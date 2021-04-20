import * as utils from '../utils/index.js'

export default ({ client, message, args }) => {
  if (args.join(' ').indexOf(' x ') === -1) {
    message.channel.send('Invalid arguments! Use `c?ship {USER ONE} x {USER TWO}`.')
  } else {
    args = args.join(' ').split(' x ')

    if (message.mentions.members.length !== 0) console.log('helo')

    let mentionOne = utils.general.getUserFromMention(args[0], client)
    let mentionTwo = utils.general.getUserFromMention(args[1], client)

    if (mentionOne) args[0] = mentionOne['username']
    if (mentionTwo) args[1] = mentionTwo['username']

    let percentage = Math.floor(Math.random() * 101)
    let percstring = ''

    switch (true) {
      case percentage < 16:
        percstring = 'Yikes... that doesn\'t look to good...'
        break
      case percentage < 31:
        percstring = 'Uhh... yeah... that\'s lovely...'
        break
      case percentage < 46:
        percstring = 'Eh, it could be better.'
        break
      case percentage < 51:
        percstring = 'Average. You guys should stay acquainted.'
        break
      case percentage < 66:
        percstring = 'I mean... it\'s not the worst score you can get...'
        break
      case percentage < 81:
        percstring = 'You guys seem like good friends!'
        break
      case percentage < 96:
        percstring = 'You guys look so cute together!!'
        break
      case percentage < 101:
        percstring = 'Wow! You guys are like a match made in heaven!!'
        break
    }

    let nship1 = args[0].substring(0, Math.ceil(args[0].length / 2))
    let nship2 = args[1].substring(0, Math.ceil(args[1].length / 2))
    let nship3 = args[1].substring(Math.ceil(args[1].length / 2))
    let nship4 = args[0].substring(Math.ceil(args[0].length / 2))

    let ship1 = nship1 + nship3
    let ship2 = nship2 + nship4
    let ship3 = nship1 + nship2.charAt(0).toLowerCase() + nship2.substring(1)
    let ship4 = nship4.charAt(0).toUpperCase() + nship4.substring(1) + nship3

    message.channel.send(`:heartpulse:  **${percentage > 49 ? 'SUCCESSFUL SHIP' : 'UNSUCCESSFUL SHIP'}**  :heartpulse:\n\`${ship1}\` \`${ship2}\` \`${ship3}\` \`${ship4}\`\n> **${percentage}%** ${percstring}`)
  }
}