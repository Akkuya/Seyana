import * as utils from '../utils/index.js'

export default async ({ client, message }) => {
  let currentDate = new Date()
  message.channel.send('Pinging...').then(afterMessage => {
    afterMessage.edit('', {
      embed: {
        color: 16508079,
        title: 'Hello!',
        description: [
        `**From Discord**: \`${currentDate - message.createdAt}ms\``,
        `**Back to Discord**: \`${afterMessage.createdAt - message.createdAt}ms\``,
        `**API**: \`${Math.round(client.ws.ping)}ms\``,
        `**Uptime**: \`${utils.time.msToTime(client.uptime)}\``
        ].join('\n'),
        footer: {
        icon_url: message.author.avatarURL(),
        text: `Action Evoked by ${message.author.tag}`    
      }}
    })
  })
}