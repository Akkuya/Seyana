import Discord from 'discord.js'
import secrets from '../../secrets.json'
const webhookClient = new Discord.WebhookClient(secrets.webhookID, secrets.webhookToken);

export const sendAsUser = (webhook, content, username, avatarURL) => webhook.send(content, { username, avatarURL })

export const sendEmojiSuggestion = (content, username, avatarURL) => webhookClient.send(content, { username, avatarURL })