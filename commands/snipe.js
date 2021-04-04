import * as utils from '../utils/index.js'

export default ({ message }) => {
  const snipes = utils.json.getSnipes()
  if (Object.keys(snipes).length === 0 && snipes.constructor === Object)
    message.channel.send('I couldn\'t find any edited or deleted messages in the past 30 seconds!')
  else {
    message.channel.send('', {
      embed: {
        color: 16508079,
        title: 'Edits and deletions for the past 30 seconds.',
        fields: [Object.values(snipes).map(snipe => Object({
          name: `${snipe[1]} (${snipe[2]})`,
          value: snipe[0].content
        }))],
        footer: {
        icon_url: message.author.avatarURL(),
        text: `Action Evoked by ${message.author.tag}`    
      }}
    })
    utils.json.writeSnipes({})
  }
}