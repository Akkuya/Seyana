import Discord from 'discord.js'
import secrets from '../secrets.json'
import * as commands from './commands/index.js'
import * as utils from './utils/index.js'

const client = new Discord.Client()

client.on('ready', () => console.log('I am ready!'))
client.on('message', async (message) => {
  /* Groovy Deletor */
  if (message.channel.id !== '730105473696530462') {
    if (message.author.id === '234395307759108106') {
      await utils.time.sleep(5000), message.delete().catch(console.error)
    } else if (message.content.startsWith('>>')) {
      message.delete(), await utils.time.sleep(5000)
      message.channel.messages.fetch().then(messages => {
        const botMessages = messages.filter(msg => msg.author.id === '234395307759108106')
        message.channel.bulkDelete(botMessages)
      }).catch(console.error)
    }
  }

  if (message.author.bot) return
  if (!message.content.toLowerCase().startsWith('c?')) return

  let commandBody = message.content.slice(2)
  let args = commandBody.split(' ')
  let command = args.shift().toLowerCase()

  Object.keys(commands).map(mapcmd => {
    if (command === mapcmd) {
      commands[mapcmd]({
        client, message, args
      })
    }
  })

  /* whatis Command */
  if (/^whatis/.test(command))
    (await import('./commands/whatis.js'))
      .default({ commandBody, message })
})

/* Sniper */
utils.json.writeSnipes({}); let snipes = {};
client.on('messageDelete', (message) => {
  const conditionals = [
    message.author.bot,
    message.channel.id === '746773777219584132',
    message.guild.id === '729810201938493524',
    message.content.length === 0,
    message.content.indexOf('>>') === 0
  ]

  for (let i of conditionals) if (i) { return }

  snipes[message.id] = [message, message.author.tag, 'deletion']
  utils.json.writeSnipes(snipes)

  setTimeout(() => {
    delete snipes[message.id]
    utils.json.writeSnipes(snipes)
  }, 3e4)
})

client.on('messageUpdate', (message) => {
  const conditionals = [
    message.author.bot,
    message.channel.id === '746773777219584132',
    message.guild.id === '729810201938493524',
    message.content.length === 0
  ]

  for (let i of conditionals) { if (i) return }

  snipes[message.id] = [message, message.author.tag, 'edit']
  utils.json.writeSnipes(snipes)

  setTimeout(() => {
    delete snipes[message.id]
    utils.json.writeSnipes(snipes)
  }, 3e4)
})

client.login(secrets.token)