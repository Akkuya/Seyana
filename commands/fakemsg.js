import * as utils from '../utils/index.js'

export default async ({ client, message, args }) => {
  const user = message.guild.member(utils.general.getUserFromMention(args.shift(), client))
  const webhooks = await message.channel.fetchWebhooks()
  const webhook = webhooks.size ? webhooks.first() : await message.channel.createWebhook('uwu')
  if (!user || !args || message.channel.id === '802329717138259988') return
  utils.webhooks.sendAsUser(webhook, args.join(' '), user.displayName, user.user.avatarURL())
  message.delete()
}