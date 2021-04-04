import * as utils from '../utils/index.js'

export default async ({ message }) => {
  const role = message.guild.roles.cache.find(r => r.name === 'Drunk / High')
  const hasRole = message.member.roles.cache.find(r => r.name === 'Drunk / High')

  if (hasRole) {
    message.channel.send('Role unassigned!').then(async afterMessage => {
      message.delete(), message.member.roles.remove(role)
      await utils.time.sleep(3000), afterMessage.delete() 
    })
  } else if (!hasRole) {
    message.channel.send('Role assigned!').then(async afterMessage => {
      message.delete(), message.member.roles.add(role)
      await utils.time.sleep(3000), afterMessage.delete() 
    })
  }
}