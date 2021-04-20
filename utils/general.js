export const randomString = () => {
  let result = ''
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=~!@#$%^&()+[];,./{}|:"<>?'.split('')
  characters.map(() => result += characters[Math.floor(Math.random() * characters.length)])
  return result
}

export const getUserFromMention = (mention, client) => {
  if (!mention) return
  if (Array.isArray(mention)) mention = mention.join('')

  const matches = mention.match(/<@(?:!?|&?)(\d+)>/i)
  if (matches) mention = matches[1]
  return client.users.cache.get(mention)
}

export const sanitize = text => text.replace(/@/g, '@' + String.fromCharCode(8203))