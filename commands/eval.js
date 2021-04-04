// stolen from stack overflow :3
export default async ({ message, args }) => {
  if (message.author.id === '474322346937810955') {
    try {
      const code = args.join(' ')
      let evaled = eval(code)

      if (typeof evaled !== 'string')
        evaled = (await import('util')).inspect(evaled)

      message.channel.send(sanitize(evaled), { code: 'xl' })
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${sanitize(err)}\n\`\`\``)
    }
  }
}

const sanitize = text => {
  if (typeof (text) === 'string')
    return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
  else
    return text
}