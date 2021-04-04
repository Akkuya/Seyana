import * as utils from '../utils/index.js'

export default ({ message }) => {
  message.channel.send({
    embed: {
      title: 'fukc yuo i htae yuo',
      color: 16508079,
      footer: { 'text': `fxukc yuo` },
      fields: [{
        name: 'fuxck yuo',
        value: 'yuos sjuck',
        inline: true
      },
      {
        name: 'i jam vry mad sjo i sjlma fajce on keibaord',
        value: utils.general.randomString(),
        inline: true
      }]
    }
  })
}