export const randomString = () => {
  let result = ''
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=~!@#$%^&()+[];,./{}|:"<>?'.split('')
  characters.map(() => result += characters[Math.floor(Math.random() * characters.length)])
  return result
}

export const getUserFromMention = (mention, client) => {
  if (!mention) return
  mention = mention.join('')

  if (mention.startsWith('<@') && mention.endsWith('>')) {
    mention = mention.slice(2, -1)

    if (mention.startsWith('!'))
      mention = mention.slice(1)

    return client.users.cache.get(mention)
  }
}

export const sanitize = text => text.replace(/@/g, '@' + String.fromCharCode(8203))