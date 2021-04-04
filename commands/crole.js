import * as utils from '../utils/index.js'

export default async ({ message, args }) => {
  const croles = await utils.json.croles()
  if (!croles.hasOwnProperty(message.author.id) || !args[1]) return
  const role = message.guild.roles.cache.get(croles[message.author.id]),
        color = role.color, 
        name = role.name

  switch (args.shift()) {
    case 'color':
      role.setColor(args[0])
        .then(() => {
          message.channel.send({
            'embed': {
              'color': 16508079,
              'title': 'Role Updated',
              'description': [
                `**Role Name**: \`${role.name}\``,
                `**New Color**: \`${role.color}\``,
                `**Old Color**: \`${color}\``
              ].join('\n'),
              'footer': {
                'icon_url': message.author.avatarURL(),
                'text': `Action Evoked by ${message.author.tag}`
              }
            }
          })
        })
        .catch(console.error)
      break
    case 'name':
      role.setName(args.join(' '))
        .then(() => {
          message.channel.send({
            'embed': {
              'color': 16508079,
              'title': 'Role Updated',
              'description': [
                `**New Name**: \`${role.name}\``,
                `**Old Name**: \`${name}\``,
                `**Role Color**: \`${role.color}\``
              ].join('\n'),
              'footer': {
                'icon_url': message.author.avatarURL(),
                'text': `Action Evoked by ${message.author.tag}`
              }
            }
          })
        })
        .catch(console.error)
      break
  }
}