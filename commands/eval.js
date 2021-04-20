import * as utils from '../utils/index.js'

// stolen from stack overflow :3
export default async ({ client, message, args }) => {
  if (message.author.id === '474322346937810955') {
    try {
      const code = args.join(' ')
      let evaled = eval(code)

      if (typeof evaled !== 'string')
        evaled = (await import('util')).inspect(evaled)

      message.channel.send(utils.general.sanitize(evaled), { code: 'xl' })
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${utils.general.sanitize(err)}\n\`\`\``)
    }
  }
}